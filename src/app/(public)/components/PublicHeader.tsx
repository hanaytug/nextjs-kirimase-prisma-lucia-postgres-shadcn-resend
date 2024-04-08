import React from 'react';

import SiteIcon from '@/components/SiteLogo';
import { ThemeToggle } from '@/components/ThemeToggle';

import { getUserAuth } from '@/lib/auth/utils';

import Link from 'next/link';

import { siteConfig } from '@/config/site';

export default async function Component() {
  const session = await getUserAuth();

  return (
    <header className='flex h-16 w-full items-center px-4 md:px-6 border-b'>
      <Link href='/' className='flex items-center gap-2 font-semibold'>
        <SiteIcon className='h-6 w-6' />
        <span className=''>{siteConfig.name}</span>
      </Link>
      <div className='ml-auto flex items-center gap-4'>
        <nav className='flex-1 ml-6'>
          <Link className='font-medium' href='/'>
            Home
          </Link>
        </nav>
        <Link className='font-medium' href='/docs'>
          Docs
        </Link>
        {session?.session ? (
          <Link
            className='inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300'
            href='/dashboard'
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link className='font-medium' href='/sign-in'>
              Sign in
            </Link>
            <Link className='font-medium' href='/sign-up'>
              Sign up
            </Link>
          </>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}
