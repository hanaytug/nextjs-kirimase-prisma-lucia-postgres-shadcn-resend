import SignOutBtn from '@/components/auth/SignOutBtn';

import { getUserAuth } from '@/lib/auth/utils';

export default async function Home() {
  const { session } = await getUserAuth();
  return (
    <>
      <div className='grid w-full max-w-6xl gap-2'>
        <h1 className='text-3xl font-semibold'>Profile</h1>
      </div>
      <pre className='bg-secondary p-4 rounded-lg my-2'>
        {JSON.stringify(session, null, 2)}
      </pre>
      <SignOutBtn />
    </>
  );
}
