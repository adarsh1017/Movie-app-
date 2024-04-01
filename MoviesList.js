import React, { useState } from 'react';

function MoviesList() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/films');
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
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
