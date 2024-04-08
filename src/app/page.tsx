import { HomeFooter } from '@/app/(home)/_components/HomeFooter';
import { HomeHeader } from '@/app/(home)/_components/HomeHeader';

import LandingPage from 'src/app/(home)/_components/landing-page';

export default function HomePage() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <HomeHeader />
        <LandingPage />
        <HomeFooter />
      </div>
    </>
  );
}
