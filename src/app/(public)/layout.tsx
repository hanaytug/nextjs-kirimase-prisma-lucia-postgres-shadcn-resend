import React from 'react';

import PublicFooter from '@/app/(public)/components/PublicFooter';
import PublicHeader from '@/app/(public)/components/PublicHeader';

import { validateRequest } from '@/lib/auth/lucia';

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicHeader />
      {children}
      <PublicFooter />
    </>
  );
}
