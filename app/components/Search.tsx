import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { search } from '@/lib/features/search';
import { useSearchMoviesQuery } from '@/lib/services/movies';
import { motion, AnimatePresence } from 'framer-motion';
import { Movie } from '@/lib/definitions';
import MovieSearchResult from './MovieSearchResults';

export default function Search() {
  const searchValue = useSelector((state: RootState) => state.search.value);
  const { data, isLoading } = useSearchMoviesQuery(searchValue, {
    skip: searchValue === '',
  });
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(search(value));
    setShowDropdown(value.length > 0);
  };

  return (
    <div className='relative w-full sm:w-auto flex-1 mx-4 max-w-[600px]'>
      <input
        onChange={handleInputChange}
        type='text'
        value={searchValue}
        placeholder='Search for a movie...'
        className='w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
      />
      <FaSearch className='absolute top-3 right-3 text-gray-500' />

      {/* Dropdown to display search results */}
      <AnimatePresence>
        {showDropdown && !isLoading && data?.results && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className='absolute left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50'
          >
            {data.results.length === 0 ? (
              <li className='px-4 py-2 text-gray-400'>No movies found.</li>
            ) : (
              data.results.map((movie: Movie) => (
                <MovieSearchResult
                  key={movie.id}
                  movie={movie}
                  onSelect={setShowDropdown}
                />
              ))
            )}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Loading state */}
      {isLoading && (
        <div className='absolute left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg'>
          <p className='px-4 py-2 text-gray-400'>Loading...</p>
        </div>
      )}
    </div>
  );
}
