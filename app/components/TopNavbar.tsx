'use client';
import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa'; // Import icons
import { motion } from 'framer-motion'; // For animations

export default function TopNavbar() {
  return (
    <motion.div
      className='bg-gray-900 text-white shadow-md flex flex-wrap items-center justify-between px-4 py-3'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Logo Section */}
      <div className='flex items-center space-x-2'>
        <h1 className='text-xl sm:text-2xl font-semibold'>MoviesAI</h1>
      </div>

      {/* Search Bar */}
      <div className='relative w-full sm:w-auto flex-1 mx-4 max-w-[600px]'>
        <input
          type='text'
          placeholder='Search for a movie...'
          className='w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
        />
        <FaSearch className='absolute top-3 right-3 text-gray-500' />
      </div>

      {/* User Profile Section */}
      <div className='flex items-center space-x-4'>
        <motion.button
          className='flex items-center px-3 py-2 rounded-md hover:bg-gray-800 transition-colors'
          onClick={() => console.log('Profile clicked')}
        >
          <FaUserCircle className='text-xl sm:text-2xl' />
          <span className='ml-2 hidden md:block'>Profile</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
