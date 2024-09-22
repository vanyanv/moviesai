'use client';
import React, { useState } from 'react';
import { FaSearch, FaFire, FaRobot, FaUser, FaCog } from 'react-icons/fa'; // Icon imports
import { motion } from 'framer-motion'; // For animations

const navigation = [
  { name: 'Search', href: '/dashboard', icon: <FaSearch /> },
  { name: 'Trending', href: '/trending', icon: <FaFire /> },
  { name: 'Ai', href: '/ai', icon: <FaRobot /> },
  { name: 'Profile', href: '/profile', icon: <FaUser /> },
  { name: 'Settings', href: '/settings', icon: <FaCog /> },
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
      <nav className=' flex-1 justify-center items-center mt-10 ml-2.5 space-y-1'>
        {navigation.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            className={`flex items-center space-x-3 px-4 py-3 group rounded-md hover:bg-gray-800 transition-all duration-300 relative`}
          >
            <span className='text-xl'>{item.icon}</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              className='text-lg font-medium whitespace-nowrap'
            >
              {item.name}
            </motion.span>
          </motion.a>
        ))}
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
