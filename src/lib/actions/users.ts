'use server';

import { db } from '@/lib/db';
import { verificationEmailSchema } from '@/lib/email/utils';

import { TimeSpan, generateId } from 'lucia';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createDate, isWithinExpirationDate } from 'oslo';
import { alphabet, generateRandomString } from 'oslo/crypto';
import { Argon2id } from 'oslo/password';

import { lucia, validateRequest } from '../auth/lucia';
import {
  genericError,
  getUserAuth,
  setAuthCookie,
  validateAuthFormData,
} from '../auth/utils';
import { updateUserSchema } from '../db/schema/auth';

interface ActionResult {
  error: string;
}

export async function signInAction(
  _: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const { data, error } = validateAuthFormData(formData);
  if (error !== null) return { error };

  try {
    const existingUser = await db.user.findUnique({
      where: { email: data.email.toLowerCase() },
    });
    if (!existingUser) {
      return {
        error: 'Incorrect username or password',
      };
    }

    const validPassword = await new Argon2id().verify(
      existingUser.hashedPassword,
      data.password
    );
    if (!validPassword) {
      return {
        error: 'Incorrect username or password',
      };
    }

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    setAuthCookie(sessionCookie);

    return redirect('/dashboard');
  } catch (e) {
    return genericError;
  }
}

export async function signUpAction(
  _: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const { data, error } = validateAuthFormData(formData);

  if (error !== null) return { error };

  const hashedPassword = await new Argon2id().hash(data.password);
  const userId = generateId(15);

  try {
    // TODO: check if username is already used
    // TODO: add firstName and lastName
    await db.user.create({
      data: {
        id: userId,
        email: data.email,
        hashedPassword,
      },
    });
  } catch (e) {
    return genericError;
  }

  const verificationCode = await generateEmailVerificationCode(userId);
  //await sendVerificationCode("John", "Doe", data?.email, verificationCode);

  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  setAuthCookie(sessionCookie);
  return redirect('/dashboard');
}

async function generateEmailVerificationCode(userId: string): Promise<string> {
  await db.emailVerificationCode.deleteMany({
    where: { userId: { equals: userId } },
  });
  const code = generateRandomString(6, alphabet('0-9', 'A-Z'));
  await db.emailVerificationCode.create({
    data: {
      userId: userId,
      code: code,
      expiresAt: createDate(new TimeSpan(15, 'm')),
    },
  });
  return code;
}

async function sendVerificationCode(
  firstName: string,
  lastName: string,
  email: string,
  verificationCode: string
) {
  const payload = verificationEmailSchema.parse({
    firstName: firstName,
    lastName: lastName,
    email: email,
    verificationCode: verificationCode,
  });

  const req = await fetch('http://localhost:3000/api/email', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function signOutAction(): Promise<ActionResult> {
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: 'Unauthorized',
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  setAuthCookie(sessionCookie);
  redirect('/sign-in');
}

export async function updateUser(
  _: any,
  formData: FormData
): Promise<ActionResult & { success?: boolean }> {
  const { session } = await getUserAuth();
  if (!session) return { error: 'Unauthorised' };

  const name = formData.get('name') ?? undefined;
  const email = formData.get('email') ?? undefined;

  const result = updateUserSchema.safeParse({ name, email });

  if (!result.success) {
    const error = result.error.flatten().fieldErrors;
    if (error.name) return { error: 'Invalid name - ' + error.name[0] };
    if (error.email) return { error: 'Invalid email - ' + error.email[0] };
    return genericError;
  }

  try {
    await db.user.update({
      data: { ...result.data },
      where: { id: session.user.id },
    });
    revalidatePath('/account');
    return { success: true, error: '' };
  } catch (e) {
    return genericError;
  }
}

export async function verifyEmailAction(
  _: any,
  formData: FormData
): Promise<ActionResult & { success?: boolean }> {
  const { session } = await getUserAuth();
  if (!session) return { error: 'Unauthorised' };

  const inputEmailVerificationCode =
    String(formData.get('input-otp')) ?? undefined;

  try {
    const emailVerificationCode = await db.emailVerificationCode.findUnique({
      where: { userId: session.user.id },
    });

    if (
      emailVerificationCode &&
      emailVerificationCode?.code === inputEmailVerificationCode.toUpperCase()
    ) {
      if (isWithinExpirationDate(emailVerificationCode?.expiresAt)) {
        await db.user.update({
          where: { id: session.user.id },
          data: { emailVerified: true },
        });

        await db.emailVerificationCode.delete({
          where: { userId: session.user.id },
        });

        //TODO Toast
        revalidatePath('/dashboard');
        return { success: true, error: '' };
      } else {
        return { error: 'Code Expired - ' + emailVerificationCode?.expiresAt };
      }
    } else {
      return {
        error: 'Code Invalid - ' + inputEmailVerificationCode.toUpperCase(),
      };
    }
  } catch (e) {
    return genericError;
  }
}
