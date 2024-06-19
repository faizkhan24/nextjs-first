import Loader from '@/components/Loader';
import PostsList from '@/components/post-lists';
import Link from 'next/link';
import React, { Suspense } from 'react';


function Page() {


  return (
    <main className="text-center my-10 ">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl">All posts</h1>
    <Suspense fallback={<Loader/>}>

      <PostsList/>  
    </Suspense>
   
    </main>
  );
}

export default Page;
