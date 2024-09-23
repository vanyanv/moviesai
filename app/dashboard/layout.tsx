import React from 'react';
import MovieSearch from '../components/MovieSearch';
import SideNavbar from '../components/SideNavbar';
import TopNavbar from '../components/TopNavbar';

export default function Layout() {
  return (
    <div className='flex  h-screen'>
      {/* Sidebar */}
      <div className='fixed'>
        <SideNavbar />
      </div>

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col pl-20'>
        {/* Top Navbar */}
        <TopNavbar />

        {/* Main Content */}
        <div className='flex-1 p-4 lg:p-6 overflow-auto max-w-full'>
          <MovieSearch />
        </div>
      </div>
    </div>
  );
}
