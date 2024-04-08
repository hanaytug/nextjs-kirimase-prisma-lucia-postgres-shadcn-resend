'use client';

import { useFormStatus } from 'react-dom';
import { useFormState } from 'react-dom';

import { AuthFooter } from '@/app/(auth)/components/AuthFooter';
import { AuthHeader } from '@/app/(auth)/components/AuthHeader';

import AuthFormError from '@/components/auth/AuthFormError';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { passwordResetAction } from '@/lib/actions/users';
import { cn } from '@/lib/utils';

import { Loader } from 'lucide-react';

export default function ResetPasswordPage({
  params,
}: {
  params: { token: string };
}) {
  const [state, formAction] = useFormState(passwordResetAction, {
    error: '',
  });

  return (
    <>
      <AuthHeader />
      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl text-center'>Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
          <AuthFormError state={state} />
          <form action={formAction}>
            <div className='grid gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>New Password</Label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='******'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Re-enter Password</Label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='******'
                  required
                />
              </div>
              <SubmitButton />
            </div>
          </form>
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
      Save
      <Loader className={cn('animate-spin', { hidden: !pending })} />
    </Button>
  );
};
