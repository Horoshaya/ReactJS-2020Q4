import React from 'react';

import styles from './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const MovieList = ({ movieReducer }) => {
  return (
    <div className={styles.wrapper}>
      <ErrorBoundary>
        {movieReducer ? (
          movieReducer.movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              releaseDate={movie.release_date}
            />
          ))
        ) : (
          <div className="loader">Loading...</div>
        )}
      </ErrorBoundary>
    </div>
  );
};

export default MovieList;
