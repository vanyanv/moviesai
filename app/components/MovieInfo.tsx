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
    <div className='flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto my-8 transition-transform transform hover:scale-105'>
      {/* Movie Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className='rounded-lg w-full md:w-1/3 object-cover mb-4 md:mb-0 shadow-md hover:shadow-lg transition-shadow'
      />

      {/* Movie Details */}
      <div className='md:ml-6 flex flex-col justify-between'>
        <div>
          <h1 className='text-4xl font-bold mb-2 text-gray-800'>{title}</h1>
          <p className='text-gray-500 mb-2'>{release_date}</p>
          <p className='text-gray-700 mb-4 text-lg'>{overview}</p>
        </div>

        {/* Ratings and Vote Count */}
        <div className='flex items-center justify-between mt-4'>
          <span className='text-2xl font-semibold text-yellow-400'>
            ⭐ {Math.floor(vote_average)}/10
          </span>
          <span className='text-sm text-gray-500'>({vote_count} votes)</span>
        </div>
      </div>
    </div>
  );
}
