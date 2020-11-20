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
              poster_path={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              genres={movie.genres}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              runtime={movie.runtime}
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
