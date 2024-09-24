import React from 'react';

export default function page() {
  return (
    <>
      <div className='flex flex-col items-center p-6 bg-white shadow-md rounded-lg'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>Profile Page</h1>
        <div className='w-32 h-32 rounded-full bg-gray-400 mb-4'></div>
        <h2 className='text-2xl text-gray-700 mb-2'>John Doe</h2>
        <p className='text-gray-600 mb-4'>johndoe@example.com</p>
        <div className='w-full flex flex-col items-start'>
          <h3 className='text-xl font-semibold text-gray-800 mb-2'>
            Favorite Genres:
          </h3>
          <ul className='list-disc list-inside text-gray-600 mb-4'>
            <li>Action</li>
            <li>Comedy</li>
            <li>Drama</li>
          </ul>
          <h3 className='text-xl font-semibold text-gray-800 mb-2'>
            Recently Watched:
          </h3>
          <ul className='list-disc list-inside text-gray-600'>
            <li>Inception</li>
            <li>The Dark Knight</li>
            <li>Interstellar</li>
          </ul>
        </div>
      </div>
    </>
  );
}
