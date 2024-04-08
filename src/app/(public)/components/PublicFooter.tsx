import Link from 'next/link';

import { siteConfig } from '@/config/site';

export default function Component() {
  return (
    <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
      <p className='text-xs text-neutral-500 dark:text-neutral-400'>
        &copy; {new Date().getFullYear()} {siteConfig.name} All rights reserved.
      </p>
      <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
        <Link
          className='text-xs hover:underline underline-offset-4'
          href='/terms-of-service'
        >
          Terms of Service
        </Link>
        <Link
          className='text-xs hover:underline underline-offset-4'
          href='/privacy-policy'
        >
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
}
