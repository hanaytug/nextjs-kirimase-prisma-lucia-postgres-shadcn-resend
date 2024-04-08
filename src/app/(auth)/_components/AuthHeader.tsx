import React from 'react';

import SiteIcon from '@/components/SiteLogo';

import Link from 'next/link';

export const AuthHeader = () => {
  return (
    <Link
      className='mb-20 flex items-center gap-2 font-semibold justify-center'
      href='/'
    >
      <SiteIcon className='h-16 w-16' />
      <span>Anvil Inc.</span>
    </Link>
  );
};
