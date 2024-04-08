import { ThemeToggle } from '@/components/ThemeToggle';

import Link from 'next/link';

export const AuthFooterSignUp = () => {
  return (
    <footer className='py-6 md:px-8 md:py-0'>
      <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
        <p className='text-balance text-center text-xs leading-loose text-muted-foreground'>
          By continuing, you agree to our{' '}
          <Link href='/terms-of-service' className='underline'>
            Terms of Service
          </Link>{' '}
          <br />
          and{' '}
          <Link href='/privacy-policy' className='underline'>
            Privacy Policy
          </Link>
          , and to receive periodic emails with updates.
        </p>
      </div>
      <div className='text-center'>
        <ThemeToggle />
      </div>
    </footer>
  );
};
