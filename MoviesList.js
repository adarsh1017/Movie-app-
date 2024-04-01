import React, { useState } from 'react';

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async () => {
    setIsLoading(true); // Set isLoading to true when fetching starts
    try {
      const response = await fetch('https://swapi.dev/api/films');
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setIsLoading(false); // Set isLoading to false when fetching ends
    }
  };

  return (
    <div>
      <button onClick={fetchMoviesHandler} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Movies'}
      </button>
      {isLoading && <p>Loading...</p>}
      <ul>
        {movies.map(movie => (
          <li key={movie.episode_id}>
            <h2>{movie.title}</h2>
            <p>{movie.opening_crawl}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;

 
