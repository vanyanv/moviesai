import Link from 'next/link';
import React from 'react';

export default function ProductPage() {
  return (
    <div className='bg-gray-50'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-indigo-900 to-black text-white min-h-screen flex items-center'>
        <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between px-6'>
          <div className='text-section lg:w-1/2'>
            <h1 className='text-6xl font-bold leading-tight mb-4'>
              Discover MoviesAI
            </h1>
            <p className='text-lg mb-6'>
              Personalized AI-driven movie recommendations tailored to your
              taste.
            </p>
            <Link href='/dashboard'>
              <button className='bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
                Get Started
              </button>
            </Link>
          </div>
          <div className='image-section lg:w-1/2'>
            {/* Add animated/3D illustration */}
            {/* <img
              src='/3d-movie.png'
              alt='MoviesAI'
              className='w-full transform hover:rotate-3 transition duration-500'
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
