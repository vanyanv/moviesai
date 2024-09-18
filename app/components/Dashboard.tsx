import React, { useState } from 'react';

import MovieSearch from './MovieSearch';

export default function Dashboard() {
  const [filters, setFilters] = useState({ genre: '', rating: '' });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1 className='text-5xl font-extrabold text-gray-800 mb-8 text-center'>
        Movie Search Dashboard
      </h1>

      {/* Filters */}
      <div className='flex flex-col md:flex-row items-center mb-6'>
        <select
          name='genre'
          value={filters.genre}
          onChange={handleFilterChange}
          className='w-full md:w-1/2 px-4 py-3 rounded-lg shadow-md border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 md:mb-0'
        >
          <option value=''>Select Genre</option>
          {/* Add genre options here */}
          <option value='Action'>Action</option>
          <option value='Comedy'>Comedy</option>
          <option value='Drama'>Drama</option>
          {/* ...other genres */}
        </select>

        <select
          name='rating'
          value={filters.rating}
          onChange={handleFilterChange}
          className='w-full md:w-1/2 px-4 py-3 rounded-lg shadow-md border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <option value=''>Select Rating</option>
          <option value='8'>8+</option>
          <option value='7'>7+</option>
          <option value='6'>6+</option>
          {/* ...other ratings */}
        </select>
      </div>
      <MovieSearch />
    </div>
  );
}
