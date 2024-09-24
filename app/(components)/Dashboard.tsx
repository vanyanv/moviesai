import React from 'react';
import { useTopRatedMoviesQuery } from '../../lib/services/movies';
import MovieCard from './MovieCard';

type Movie = {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
};

export default function Dashboard() {
  const { data } = useTopRatedMoviesQuery({});

  const movies = data?.results;

  return (
    <div className='flex flex-col min-h-screen bg-gray-100 p-4'>
      <h1 className='text-4xl font-extrabold text-gray-800 mb-6 text-center'>
        Top Movies
      </h1>

      <div className='flex-grow'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {movies && movies.slice(0, 10).map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
