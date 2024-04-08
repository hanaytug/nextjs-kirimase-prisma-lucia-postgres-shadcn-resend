'use client';

import { useFormStatus } from 'react-dom';
import { useFormState } from 'react-dom';

import { AuthFooter } from '@/app/(auth)/components/AuthFooter';
import { AuthHeader } from '@/app/(auth)/components/AuthHeader';

import AuthFormError from '@/components/auth/AuthFormError';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { passwordResetAction } from '@/lib/actions/users';
import { cn } from '@/lib/utils';

import { Loader } from 'lucide-react';
import Link from 'next/link';

export default function ResetPasswordPage() {
  const [state, formAction] = useFormState(passwordResetAction, {
    error: '',
  });

  return (
    <>
      <AuthHeader />
      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl text-center'>
            Forgot Password?
          </CardTitle>
          <CardDescription>
            Don’t worry! Fill in your email and we&apos;ll send you a link to
            reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthFormError state={state} />
          <form action={formAction}>
            <div className='grid gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email Address</Label>
                <Input
                  name='email'
                  id='email'
                  type='email'
                  placeholder='john.doe@domain.com'
                  required
                />
              </div>
              <SubmitButton />
            </div>
          </form>

          <div className='mt-4 text-center text-sm'>
            <Link href='/sign-in' className='underline'>
              Back to Login
            </Link>
          </div>
        </CardContent>
      </Card>
      <AuthFooter />
    </>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button className='w-full' type='submit' disabled={pending}>
      Reset{pending ? 'ting' : ''} Password{' '}
      <Loader className={cn('animate-spin', { hidden: !pending })} />
    </Button>
  );
};
