'use client';
import React from 'react';
import { useSearchMoviesQuery } from '../../lib/services/movies';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { search } from '@/lib/features/search';
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
  };

  return (
    <div className='flex flex-col items-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen'>
      <h1 className='text-5xl font-extrabold text-gray-900 mb-8'>
        Discover Your Favorite Movies
      </h1>
      <form
        onSubmit={handleSearch}
        className='flex flex-col md:flex-row items-center w-full max-w-2xl bg-white shadow-lg rounded-lg p-6'
      >
        <input
          type='text'
          name='movie'
          placeholder='Search for a movie...'
          className='w-full px-4 py-3 rounded-lg shadow-md border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
        />
        <button
          type='submit'
          className='mt-4 md:mt-0 md:ml-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300'
        >
          Search
        </button>
      </form>

      {isLoading && (
        <div className='flex justify-center items-center my-6'>
          <div className='w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin'></div>
        </div>
      )}

      <div className='mt-8 w-full max-w-4xl'>
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
      </div>
    </div>
  );
}

export default MovieSearch;
