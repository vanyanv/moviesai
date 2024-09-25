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
    <div className=' max-w-screen min-h-screen bg-gray-100 pt-10'>
      <h1 className='text-4xl font-extrabold text-gray-800 mb-6 text-center'>
        Top Movies
      </h1>

      <div className='overflow-x-auto'>
        <div className='flex gap-4'>
          {movies &&
            movies
              .slice(0, 10)
              .map((movie: Movie, index: number) => (
                <MovieCard key={movie.id} movie={movie} rank={index + 1} />
              ))}
        </div>
      </div>
    </div>
  );
}
