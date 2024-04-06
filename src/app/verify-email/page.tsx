'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { useFormState } from 'react-dom';

import AuthFormError from '@/components/auth/AuthFormError';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

import { verifyEmailAction } from '@/lib/actions/users';
import { cn } from '@/lib/utils';

import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { Loader } from 'lucide-react';
import Link from 'next/link';

export default function SignInPage() {
  const [state, formAction] = useFormState(verifyEmailAction, {
    error: '',
  });

  const [value, setValue] = React.useState('');

  return (
    <Card className='mx-auto max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Verify your email address</CardTitle>
        <CardDescription>
          Enter the code below to confirm your email address.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AuthFormError state={state} />
        <form action={formAction}>
          <div className='grid gap-4 justify-center'>
            <InputOTP
              id='input-otp'
              name='input-otp'
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              value={value}
              onChange={(value) => setValue(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <SubmitButton />
          </div>
        </form>
        <div className='text-center text-sm'>
          {value === '' ? (
            <>Enter your one-time password.</>
          ) : (
            <>You entered: {value.toUpperCase()}</>
          )}
        </div>
        <div className='mt-4 text-center text-sm'>
          Did&apos;t receive a code?{' '}
          <Link href='/sign-up' className='underline'>
            Resend
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button className='w-full' type='submit' disabled={pending}>
      Verify{pending ? 'ing' : ''}{' '}
      <Loader className={cn('animate-spin', { hidden: !pending })} />
    </Button>
  );
};
