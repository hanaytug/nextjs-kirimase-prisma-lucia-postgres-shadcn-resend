import React from 'react';

import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';

import { validateRequest } from '@/lib/auth/lucia';
import { fontNotoSansMono } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import '@/styles/globals.css';

import type { Metadata, Viewport } from 'next';

import faviconDark from '../../public/favicon-dark.ico';
import faviconLight from '../../public/favicon-light.ico';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon-dark.ico',
    shortcut: '/favicon-16x16.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: 'https://anvilinc.vercel.app/',
    images: {
      url: 'https://anvilinc.vercel.app/api/og?title=Anvil+Inc.',
      width: 1200,
      height: 630,
      alt: siteConfig.description,
    },
    locale: 'en-US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-mono antialiased',
          fontNotoSansMono.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <div vaul-drawer-wrapper=''>{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
