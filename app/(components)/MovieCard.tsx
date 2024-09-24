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
    <div className='bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto transition-transform transform hover:scale-105'>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
        className='w-full h-48 object-cover transition-transform duration-300 hover:scale-110'
      />
      <div className='p-4'>
        <h3 className='text-xl font-semibold text-gray-800 mb-2'>
          {movie.title}
        </h3>
        <p className='text-gray-600 text-sm mb-2'>
          {movie.overview.length > 100
            ? `${movie.overview.slice(0, 100)}...`
            : movie.overview}
        </p>
        <button className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'>
          View Details
        </button>
      </div>
    </div>
  );
}
