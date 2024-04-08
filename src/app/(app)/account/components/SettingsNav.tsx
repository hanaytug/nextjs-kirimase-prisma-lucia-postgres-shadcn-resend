'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SettingsNav = () => {
  const path = usePathname();

  return (
    <>
      <nav
        className='grid gap-4 text-sm text-muted-foreground'
        x-chunk='dashboard-04-chunk-0'
      >
        <Link
          href='/account/general'
          className={
            path === '/account/general' || path === '/account'
              ? 'font-semibold text-primary'
              : ''
          }
        >
          General
        </Link>
        <Link
          href='/account/security'
          className={
            path === '/account/security' ? 'font-semibold text-primary' : ''
          }
        >
          Security
        </Link>
        <Link
          href='/account/integrations'
          className={
            path === '/account/integrations' ? 'font-semibold text-primary' : ''
          }
        >
          Integrations
        </Link>
        <Link
          href='/account/appearance'
          className={
            path === '/account/appearance' ? 'font-semibold text-primary' : ''
          }
        >
          Appearance
        </Link>
        <Link
          href='/account/organizations'
          className={
            path === '/account/organizations'
              ? 'font-semibold text-primary'
              : ''
          }
        >
          Organizations
        </Link>
        <Link
          href='/account/advanced'
          className={
            path === '/account/advanced' ? 'font-semibold text-primary' : ''
          }
        >
          Advanced
        </Link>
      </nav>
    </>
  );
};
