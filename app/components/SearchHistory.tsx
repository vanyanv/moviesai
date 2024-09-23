import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

export default function SearchHistory() {
  const searchHistory = useSelector(
    (state: RootState) => state.searchHistory.value
  );

  // If the searchHistory array is empty, we can return a message or nothing
  console.log(searchHistory);
  if (searchHistory.length === 0) {
    return <p className='text-gray-400 p-4'>No recent searches</p>;
  }

  return (
    <div className='p-4'>
      <h3 className='text-lg font-semibold text-gray-300 mb-2'>
        Recent Searches
      </h3>
      <ul className='space-y-2'>
        {searchHistory?.map((item: string, index: number) => (
          <li
            key={index}
            className='text-sm text-gray-400 transition-colors cursor-pointer hover:bg-gray-700 p-2 rounded-md'
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
