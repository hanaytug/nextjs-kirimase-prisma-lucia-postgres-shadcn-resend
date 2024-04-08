import React from 'react';

import { SettingsNav } from '@/app/(dashboard)/account/_components/SettingsNav';

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='grid w-full max-w-6xl gap-2'>
        <h1 className='text-3xl font-semibold'>Settings</h1>
      </div>
      <div className='grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]'>
        <SettingsNav />
        <div className='grid gap-6'>{children}</div>
      </div>
    </>
  );
}
