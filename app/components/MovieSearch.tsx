import React, { useState } from 'react';
import { useSearchMoviesQuery } from '../../lib/services/movies';
function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  // Use the query hook with the search term
  const { data, error, isLoading } = useSearchMoviesQuery(searchTerm);

  console.log(data);
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Trigger the query with the current search term
    const formData = new FormData(e.currentTarget);
    const movie = formData.get('movie') as string;
    setSearchTerm(movie);
    console.log(movie);
  };

  return (
    <div>
      <h1>Search for Movies</h1>
      <form onSubmit={handleSearch}>
        <input type='text' name='movie' placeholder='Search for a movie...' />
        <button type='submit'>Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching data.</p>}

      {data && (
        <div>
          <h2>Results:</h2>
          <ul>
            {data.results.map((movie: any) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieSearch;
