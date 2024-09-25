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
  rank: number; // Add a rank prop for the movie ranking
};

export default function MovieCard({ movie, rank }: MovieCardProps) {
  return (
    <div className='relative bg-white shadow-lg rounded-2xl overflow-hidden w-36 h-46 m-4 transition-transform transform hover:scale-105'>
      {/* Ranking Number */}
      <div className='absolute top-2 left-2 z-10 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold'>
        {`#${rank}`}
      </div>

      {/* Movie Backdrop Image */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
        className='w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-110'
      />

      {/* Movie Title */}
      <div className='p-2'>
        <h3 className='text-xs font-semibold text-gray-800 text-center'>
          {movie.title}
        </h3>
      </div>
    </div>
  );
}
