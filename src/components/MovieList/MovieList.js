import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const MovieList = ({ movies }) => {
  return (
    <div className={styles.wrapper}>
      <ErrorBoundary>
        {movies ? (
          movies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
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
            </Link>
          ))
        ) : (
          <div className="loader">Loading...</div>
        )}
      </ErrorBoundary>
    </div>
  );
};

export default MovieList;
