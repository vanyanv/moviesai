import React from 'react';
import { motion } from 'framer-motion';
import { Movie } from '@/lib/definitions';
import { useDispatch } from 'react-redux';
import { addToHistory } from '@/lib/features/searchHistory';
import { search } from '@/lib/features/search';

type MovieSearchResultProps = {
  movie: Movie;
  onSelect: (state: boolean) => void;
};

export default function MovieSearchResult({
  movie,
  onSelect,
}: MovieSearchResultProps) {
  const dispatch = useDispatch();
  return (
    <motion.li
      key={movie.id}
      className='flex items-center space-x-3 p-2 hover:bg-gray-700 transition-all duration-200 cursor-pointer rounded-md'
      onClick={() => {
        onSelect(false);
        dispatch(addToHistory(movie.title));
        dispatch(search(''));
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Movie Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
        alt={movie.title}
        className='w-10 h-14 rounded-md shadow-md object-cover'
      />

      {/* Movie Details */}
      <div className='flex flex-col justify-center'>
        <h3 className='text-sm font-semibold text-white truncate max-w-[180px]'>
          {movie.title}
        </h3>
        <p className='text-xs text-gray-400'>Release: {movie.release_date}</p>
        <p className='text-xs text-gray-400'>Rating: {movie.vote_average}/10</p>
      </div>
    </motion.li>
  );
}
