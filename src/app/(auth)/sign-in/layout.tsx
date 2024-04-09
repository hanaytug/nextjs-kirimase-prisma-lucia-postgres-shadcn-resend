import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In ',
};

export default async function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
