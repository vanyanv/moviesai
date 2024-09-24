import React from 'react';

type MovieInfoProps = {
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
  vote_count: number;
};

export default function MovieInfo({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
  vote_count,
}: MovieInfoProps) {
  return (
    <li className='flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 mx-auto my-6 max-w-4xl'>
      {/* Movie Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className='rounded-lg w-full md:w-1/3 object-cover md:h-full transition-shadow hover:shadow-lg'
      />

      {/* Movie Details */}
      <div className='flex flex-col justify-between p-4 md:p-6 md:ml-4'>
        <div>
          <h1 className='text-3xl font-bold text-gray-800 mb-1'>{title}</h1>
          <p className='text-sm text-gray-600 mb-2'>{release_date}</p>
          <p className='text-gray-700 text-md mb-4'>{overview}</p>
        </div>

        {/* Ratings and Vote Count */}
        <div className='flex items-center justify-between mt-4'>
          <span className='text-xl font-semibold text-yellow-500'>
            ⭐ {Math.floor(vote_average)}/10
          </span>
          <span className='text-sm text-gray-500'>({vote_count} votes)</span>
        </div>
      </div>
    </li>
  );
}
