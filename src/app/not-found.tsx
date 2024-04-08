import { HomeFooter } from '@/app/(home)/_components/HomeFooter';
import { HomeHeader } from '@/app/(home)/_components/HomeHeader';

export default function Custom404() {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <HomeHeader />
        <main className='flex-1 flex flex-col items-center justify-center'>
          <div className='text-center space-y-2'>
            <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
              404 Not Found
            </h1>
            <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              Sorry, we couldn&apos;t find what you were looking for. But we did
              find this cool 404 page.
            </p>
          </div>
        </main>
        <HomeFooter />
      </div>
    </>
  );
}
