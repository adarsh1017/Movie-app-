/*
import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
*/

/*
// MoviesList.js

import React from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';

const MoviesList = (props) => {
  const deleteHandler = (id) => {
    props.onDeleteMovie(id);
  };

  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        >
          <button onClick={() => deleteHandler(movie.id)}>Delete</button>
        </Movie>
      ))}
    </ul>
  );
};

export default MoviesList;
*/
// MoviesList.js

import React, { useState } from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';
import { addToCart } from './cartUtils'; // Import addToCart function

const MoviesList = ({ movies }) => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (movie) => {
        addToCart(movie);
        setCartItems(prevItems => [...prevItems, movie]); // Update cart items state
    };

    return (
        <div>
            <h1>Movies List</h1>
            <ul className={classes['movies-list']}>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Movie
                            id={movie.id}
                            title={movie.title}
                            releaseDate={movie.releaseDate}
                            openingText={movie.openingText}
                        />
                        <button onClick={() => handleAddToCart(movie)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
            <h2>Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;

