import { ThemeToggle } from '@/components/ThemeToggle';

import Link from 'next/link';

export const AuthFooter = () => {
  return (
    <div className='mt-4 text-center text-xs'>
      <Link
        href='/terms-of-service'
        className='text-muted-foreground underline'
      >
        Terms of Service
      </Link>{' '}
      <Link href='/privacy-policy' className='text-muted-foreground underline'>
        Privacy Policy
      </Link>
      <div className='mt-5'>
        <ThemeToggle />
      </div>
    </div>
  );
};
