import React from 'react';

import { checkAuth, getUserAuth } from '@/lib/auth/utils';

import { redirect } from 'next/navigation';

export default async function VerifyEmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkAuth();

  const session = await getUserAuth();
  if (session?.session?.user.emailVerified) redirect('/dashboard');

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className='w-96'>{children}</div>
      </div>
    </>
  );
}
