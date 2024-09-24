'use client';
import React, { useState } from 'react';
import { FaFire, FaRobot, FaUser, FaCog } from 'react-icons/fa'; // Icon imports
import { motion } from 'framer-motion'; // For animations
import Link from 'next/link';
import SearchHistory from './SearchHistory';

const navigation = [
  { name: 'Trending', href: '/dashboard', icon: <FaFire /> },
  { name: 'Ai', href: '/dashboard/ai', icon: <FaRobot /> },
  { name: 'Profile', href: '/dashboard/profile', icon: <FaUser /> },
];

export default function SideNavbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ width: 80 }}
      animate={{ width: isExpanded ? 220 : 80 }}
      className='h-screen bg-gray-900 text-white flex flex-col shadow-lg relative'
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo Section */}
      <div className='flex items-center justify-center h-16 bg-gray-800 shadow-md'>
        <motion.h1
          animate={{ opacity: isExpanded ? 1 : 0 }}
          className='text-2xl font-semibold tracking-wide whitespace-nowrap'
        >
          MoviesAI
        </motion.h1>
      </div>

      {/* Navigation Section */}
      <nav className='flex-1 flex flex-col justify-start items-start ml-2.5 mt-10 space-y-4'>
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className='flex items-center space-x-3 px-4 py-3 group rounded-md hover:bg-gray-800 transition-all duration-300 relative'
          >
            <span className='text-xl'>{item.icon}</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              className='text-lg font-medium whitespace-nowrap'
            >
              {item.name}
            </motion.span>
          </Link>
        ))}

        {/* Search History Component */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          className='w-full'
        >
          <SearchHistory />
        </motion.div>
      </nav>

      {/* Bottom Section */}
      <div className='absolute bottom-0 w-full p-4'>
        <motion.div
          className='flex items-center space-x-3 hover:bg-gray-800 px-4 py-3 rounded-md cursor-pointer transition-colors'
          onClick={() => console.log('Settings clicked')}
        >
          <FaCog className='text-xl' />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            className='text-lg'
          >
            Settings
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
