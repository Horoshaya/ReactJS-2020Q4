import React from 'react';
import styles from './MovieDetails.css';

const MovieDetails = ({ movieData, triggerMovieDetails }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.closeIcon} onClick={triggerMovieDetails} />
      </div>
      <div className={styles.movieWrapper}>
        <img className={styles.posterPath} src={movieData.poster_path} />
        <div className={styles.movieInfo}>
          <div className={styles.movieHeader}>
            <h2 className={styles.title}>{movieData.title}</h2>
            <p className={styles.vote}>{movieData.vote_average}</p>
          </div>
          <div>
            <p>{movieData.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
