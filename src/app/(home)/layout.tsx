import React from 'react';

import { HomeFooter } from '@/app/(home)/_components/HomeFooter';
import { HomeHeader } from '@/app/(home)/_components/HomeHeader';

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeHeader />
      {children}
      <HomeFooter />
    </>
  );
}
