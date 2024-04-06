import { EmailTemplate } from '@/components/emails/VerificationEmail';

import { resend } from '@/lib/email';
import { verificationEmailSchema } from '@/lib/email/utils';

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, verificationCode } =
    verificationEmailSchema.parse(body);

  try {
    const data = await resend.emails.send({
      from: 'Auth Test <no-reply@aytughan.com>',
      to: [email],
      subject: 'Hello world!',
      react: EmailTemplate({
        firstName: firstName,
        lastName: lastName,
        verificationCode: verificationCode,
      }),
      text: 'Email powered by Resend.',
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
