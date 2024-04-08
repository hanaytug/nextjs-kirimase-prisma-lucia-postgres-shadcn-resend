import React from 'react';

import { getUserAuth } from '@/lib/auth/utils';

import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getUserAuth();
  if (session?.session) redirect('/dashboard');

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className='w-90'>{children}</div>
      </div>
    </>
  );
}
