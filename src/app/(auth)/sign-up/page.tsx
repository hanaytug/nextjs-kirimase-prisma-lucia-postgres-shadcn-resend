'use client';

import { useFormStatus } from 'react-dom';
import { useFormState } from 'react-dom';

import { AuthFooterSignUp } from '@/app/(auth)/_components/AuthFooterSignUp';
import { AuthHeader } from '@/app/(auth)/_components/AuthHeader';

import AuthFormError from '@/components/auth/AuthFormError';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { signUpAction } from '@/lib/actions/users';
import { cn } from '@/lib/utils';

import { Loader } from 'lucide-react';
import Link from 'next/link';

export default function SignUpPage() {
  const [state, formAction] = useFormState(signUpAction, {
    error: '',
  });

  return (
    <>
      <AuthHeader />
      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl text-center'>
            Let&apos;s get started
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AuthFormError state={state} />
          <form action={formAction}>
            <div className='grid gap-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='grid gap-2'>
                  <Label htmlFor='firstName'>First Name</Label>
                  <Input
                    name='firstName'
                    id='firstName'
                    placeholder='John'
                    required
                  />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='lastName'>Last Name</Label>
                  <Input
                    name='lastName'
                    id='lastName'
                    placeholder='Doe'
                    required
                  />
                </div>
              </div>
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
              <div className='grid gap-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='******'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='confirm-password'>Confirm Password</Label>
                <Input
                  type='password'
                  name='confirm-password'
                  id='confirm-password'
                  placeholder='******'
                  required
                />
              </div>
              <SubmitButton />
            </div>
            <div className='mt-4 text-center text-sm'>
              Already a user?{' '}
              <Link href='/sign-in' className='underline'>
                Login in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
      <AuthFooterSignUp />
    </>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button className='w-full' type='submit' disabled={pending}>
      <Loader className={cn('animate-spin', { hidden: !pending })} />
      Get{pending ? 'ting' : ''} Started
    </Button>
  );
};
