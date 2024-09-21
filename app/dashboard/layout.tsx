import React from 'react';
import MovieSearch from '../components/MovieSearch';
import SideNavbar from '../components/SideNavbar';
import TopNavbar from '../components/TopNavbar';
export default function layout() {
  return (
    <div className='min-h-full flex '>
      <div>
        <SideNavbar />
      </div>
      <div>
        <TopNavbar />
        <MovieSearch />
      </div>
    </div>
  );
}
