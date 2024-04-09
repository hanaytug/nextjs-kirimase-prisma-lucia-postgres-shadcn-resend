import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default async function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
