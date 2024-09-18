import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query({
      query: (title: string) => ({
        url: `/search/movie`,
        params: {
          query: title,
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        },
      }),
    }),
  }),
});

export const { useSearchMoviesQuery } = moviesApi;
