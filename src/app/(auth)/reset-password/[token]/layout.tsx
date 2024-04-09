import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password',
};

export default async function ResetPasswordTokenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
