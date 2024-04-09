import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password',
};

export default async function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
