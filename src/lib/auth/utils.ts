import { type Cookie } from 'lucia';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import {
  LoginSchema,
  RegisterSchema,
  ResetPasswordSchema,
  loginSchema,
  registerSchema,
  resetPasswordSchema,
} from '../db/schema/auth';
import { validateRequest } from './lucia';

export type AuthSession = {
  session: {
    user: {
      id: string;
      name?: string;
      email?: string;
      username?: string;
      emailVerified?: boolean;
    };
  } | null;
};

export const getUserAuth = async (): Promise<AuthSession> => {
  const { session, user } = await validateRequest();
  if (!session) return { session: null };
  return {
    session: {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        emailVerified: user.emailVerified,
      },
    },
  };
};

export const checkAuth = async () => {
  const { session } = await validateRequest();
  if (!session) redirect('/sign-in');
};

export const genericError = { error: 'Error, please try again.' };

export const setAuthCookie = (cookie: Cookie) => {
  cookies().set(cookie.name, cookie.value, cookie.attributes); // <- suggested approach from the docs, but does not work with `next build` locally
};

const getErrorMessage = (errors: any): string => {
  if (errors.firstName) return 'Invalid First Name - ' + errors.firstName[0];
  if (errors.lastName) return 'Invalid Last Name - ' + errors.lastName[0];
  if (errors.email) return 'Invalid Email Email Address - ' + errors.email[0];
  if (errors.password) return 'Invalid Password - ' + errors.password[0];
  return ''; // return a default error message or an empty string
};

export const validateRegisterFormData = (
  formData: FormData
): { data: RegisterSchema; error: null } | { data: null; error: string } => {
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const password = formData.get('password');
  const result = registerSchema.safeParse({
    firstName,
    lastName,
    email,
    password,
  });

  if (!result.success) {
    return {
      data: null,
      error: getErrorMessage(result.error.flatten().fieldErrors),
    };
  }

  return { data: result.data, error: null };
};

export const validateResetPasswordFormData = (
  formData: FormData
):
  | { data: ResetPasswordSchema; error: null }
  | { data: null; error: string } => {
  const email = formData.get('email');

  const result = resetPasswordSchema.safeParse({
    email,
  });

  if (!result.success) {
    return {
      data: null,
      error: getErrorMessage(result.error.flatten().fieldErrors),
    };
  }

  return { data: result.data, error: null };
};

export const validateLoginFormData = (
  formData: FormData
): { data: LoginSchema; error: null } | { data: null; error: string } => {
  const email = formData.get('email');
  const password = formData.get('password');
  const result = loginSchema.safeParse({
    email,
    password,
  });

  if (!result.success) {
    return {
      data: null,
      error: getErrorMessage(result.error.flatten().fieldErrors),
    };
  }

  return { data: result.data, error: null };
};
