import React from 'react';

import { DashboardHeader } from '@/app/(dashboard)/_components/DashboardHeader';
import { DashboardNav } from '@/app/(dashboard)/_components/DashboardNav';

import { checkAuth, getUserAuth } from '@/lib/auth/utils';

import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkAuth();

  const session = await getUserAuth();
  if (!session?.session?.user.emailVerified) redirect('/verify-email');

  return (
    <>
      <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
        <DashboardNav />
        <div className='flex flex-col'>
          <DashboardHeader />
          <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
