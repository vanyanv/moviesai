import React from 'react';

type Movie = {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
};

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden max-w-xs mx-auto'>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
        className='w-full h-32 object-cover'
      />
      <div className='p-3'>
        <h3 className='text-lg font-semibold mb-1'>{movie.title}</h3>
        <p className='text-gray-600 text-sm'>
          {movie.overview.length > 80
            ? `${movie.overview.slice(0, 80)}...`
            : movie.overview}
        </p>
      </div>
    </div>
  );
}
