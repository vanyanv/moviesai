import React from 'react';

import SideNavbar from '../(components)/SideNavbar';
import TopNavbar from '../(components)/TopNavbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex  h-screen'>
      {/* Sidebar */}
      <div className='fixed z-20'>
        <SideNavbar />
      </div>

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col pl-20'>
        {/* Top Navbar */}
        <TopNavbar />

        {/* Main Content */}
        <div className='flex-1 p-4 lg:p-6 overflow-auto max-w-full'>
          {children}
        </div>
      </div>
    </div>
  );
}
