'use client';
import React from 'react';
import { useSearchMoviesQuery } from '../../lib/services/movies';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { search } from '@/lib/features/search';
import { addToHistory } from '@/lib/features/searchHistory';
import MovieInfo from './MovieInfo';
import { Movie } from '@/lib/definitions';

function MovieSearch() {
  const searchValue = useSelector((state: RootState) => state.search.value);
  const { data, isLoading } = useSearchMoviesQuery(searchValue, {
    skip: searchValue === '',
  });
  const dispatch = useDispatch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const movie = formData.get('movie') as string;
    dispatch(search(movie));
    if (movie) {
      dispatch(addToHistory(movie));
    }
  };

  return (
    <div className='flex flex-col items-center p-6 bg-gradient-to-r from-gray-100 to-white h-full'>
      <h1 className='text-4xl font-extrabold text-gray-900 mb-6'>
        Discover Your Favorite Movies
      </h1>
      <form
        onSubmit={handleSearch}
        className='flex flex-col md:flex-row items-center w-full max-w-2xl bg-white shadow-md rounded-lg p-4'
      >
        <input
          type='text'
          name='movie'
          placeholder='Search for a movie...'
          className='w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
        />
        <button
          type='submit'
          className='mt-4 md:mt-0 md:ml-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300'
        >
          Search
        </button>
      </form>

      {isLoading && (
        <div className='flex justify-center items-center my-6'>
          <div className='w-12 h-12 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin'></div>
        </div>
      )}

      <ul className='mt-8 w-full max-w-4xl space-y-4'>
        {data?.results.map((movie: Movie) => (
          <MovieInfo
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
            overview={movie.overview}
            vote_count={movie.vote_count}
          />
        ))}
      </ul>
    </div>
  );
}

export default MovieSearch;
