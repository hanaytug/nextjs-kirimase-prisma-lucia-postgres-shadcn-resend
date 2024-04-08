import React from 'react';

import { AppHeader } from '@/app/(app)/components/AppHeader';
import { AppNav } from '@/app/(app)/components/AppNav';

import { checkAuth, getUserAuth } from '@/lib/auth/utils';

import { redirect } from 'next/navigation';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  await checkAuth();

  const session = await getUserAuth();
  if (!session?.session?.user.emailVerified) redirect('/verify-email');

  return (
    <>
      <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
        <AppNav />
        <div className='flex flex-col'>
          <AppHeader />
          <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
