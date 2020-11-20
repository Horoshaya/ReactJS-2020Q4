import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Modal from '../Modal/Modal';
import TextField from '../TextField/TextField';
import Multiselect from '../Multiselect/Multiselect';
import styles from './ModifyModal.css';
import { editMovie, addMovie } from '../../store/actions/actionCreators';

const ModifyModal = ({ triggerModal, movieInfo }) => {
  const [movieData, setMovieData] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMoveData = {
      ...movieInfo,
      ...movieData,
      runtime: movieInfo ? movieInfo.runtime : Number(movieData.runtime),
      id: movieInfo ? movieInfo.id : new Date().getTime(),
    };
    movieInfo
      ? dispatch(editMovie(newMoveData))
      : dispatch(addMovie(newMoveData));
  };

  const handleChange = (fieldName) => (fieldValue) => {
    setMovieData({
      ...movieData,
      [fieldName]: fieldValue,
    });
  };

  return (
    <Modal triggerModal={() => triggerModal('modify')}>
      <form onSubmit={handleSubmit}>
        {movieInfo ? (
          <h2 className={styles.title}>edit movie</h2>
        ) : (
          <h2 className={styles.title}>add movie</h2>
        )}
        <TextField label="movie id" name="id" title={movieInfo.id} />
        <TextField
          label="title"
          name="title"
          title={movieInfo.title}
          handleChange={handleChange('title')}
        />
        <TextField
          label="release date"
          name="release_date"
          type="date"
          title={movieInfo.release_date}
          handleChange={handleChange('release_date')}
        />
        <TextField
          label="url"
          name="path"
          title={movieInfo.poster_path}
          handleChange={handleChange('poster_path')}
        />

        <label className={styles.label}>
          genre
          <Multiselect
            genres={movieInfo.genres ? movieInfo.genres : []}
            handleChange={handleChange('genres')}
          />
        </label>
        <TextField
          label="overview"
          name="overview"
          title={movieInfo.overview}
          handleChange={handleChange('overview')}
        />
        <TextField
          label="vote_average"
          name="vote_average"
          type="number"
          title={movieInfo.vote_average}
          handleChange={handleChange('vote_average')}
        />
        <TextField
          label="runtime"
          name="runtime"
          title={movieInfo.runtime}
          handleChange={handleChange('runtime')}
        />
        <div className={styles.buttonsWrapper}>
          <button className={styles.reset}>reset</button>
          <button type="submit" className={styles.save}>
            save
          </button>
        </div>
      </form>
    </Modal>
  );
};

ModifyModal.propTypes = {
  type: PropTypes.string,
  movieInfo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    url: PropTypes.string,
    overview: PropTypes.string,
    overview: PropTypes.string,
  }),
};

ModifyModal.defaultProps = {
  type: '',
  movieInfo: {
    id: null,
    title: '',
    releaseDate: '',
    url: '',
    genre: '',
    overview: '',
    runtime: '',
  },
};

export default ModifyModal;
