import { createPost } from '@/actions/actions';
import React from 'react';

function Page() {
  return (
    <main className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='max-w-md px-20 py-12 bg-white shadow-xl rounded-lg'>
        <h1 className='text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800'>
          Create Post
        </h1>

        <form className='space-y-4' action={createPost}>
          <div>
            <label htmlFor='title' className='block py-3 text-lg font-semibold'>
              Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
              placeholder='Enter title...'
            />
          </div>

          <div>
            <label htmlFor='content' className='block py-3 text-lg font-semibold'>
              Content
            </label>
            <textarea
              id='content'
              name='content'
              rows={5}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500'
              placeholder='Enter content...'
            />
          </div>

          <button
            type='submit'
            className='block w-full px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-200'
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default Page;
