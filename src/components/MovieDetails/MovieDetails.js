import React from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getMoviesFromIdThunk } from '../../store/middlewares';

import styles from './MovieDetails.css';

const MovieDetails = (props) => {
  const { id } = useParams();
  props.dispatch(getMoviesFromIdThunk(id));

  const { movie } = props;

  return (
    <Link to="/">
      {movie ? (
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <span className={styles.closeIcon} />
          </div>
          <div className={styles.movieWrapper}>
            <img className={styles.posterPath} src={movie.poster_path} />
            <div className={styles.movieInfo}>
              <div className={styles.movieHeader}>
                <h2 className={styles.title}>{movie.title}</h2>
                <p className={styles.vote}>{movie.vote_average}</p>
              </div>
              <div>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Link>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movieDataReducer.movie,
});

export default connect(mapStateToProps)(MovieDetails);
