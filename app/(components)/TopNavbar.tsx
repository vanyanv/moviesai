'use client';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import icons
import { motion } from 'framer-motion'; // For animations
import Search from './Search';

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
      <Search />

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
