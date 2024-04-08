import SiteFooter from '@/app/(public)/components/PublicFooter';
import SiteNavbar from '@/app/(public)/components/PublicHeader';
import LandingPage from '@/app/(public)/components/landing-page';

export default function HomePage() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <SiteNavbar />
        <LandingPage />
        <SiteFooter />
      </div>
    </>
  );
}
