import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Modal from '../Modal/Modal';
import TextField from '../TextField/TextField';
import Multiselect from '../Multiselect/Multiselect';
import styles from './ModifyModal.css';
import {
  editMovieThunk,
  addMovieThunk,
} from '../../store/middlewares';

const ModifySchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  poster_path: Yup.string().required('Required').url('Invalid URL'),
  genres: Yup.array().required('Choose the list of genres'),
  runtime: Yup.number('Field must be a number')
    .min(0)
    .required('Enter duration time'),
});

const ModifyModal = ({ triggerModal, movieInfo }) => {
  const [selectedGenres, setSelectedGenres] = useState(movieInfo.genres);
  const onMultiselectChange = (event) => {
    event.persist();
    const selectedeanres = [...event.target.selectedOptions].map(
      (option) => option.label,
    );
    setSelectedGenres(selectedeanres);
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    const newMoveData = {
      ...movieInfo,
      ...values,
      runtime: movieInfo ? movieInfo.runtime : Number(movieData.runtime),
      id: movieInfo ? movieInfo.id : new Date().getTime(),
    };
    movieInfo
      ? dispatch(editMovieThunk(newMoveData))
      : dispatch(addMovieThunk(newMoveData));
    setSubmitting(false);
  };

  return (
    <Modal triggerModal={() => triggerModal('modify')}>
      <Formik
        enableReinitialize
        initialValues={{
          id: movieInfo.id,
          title: movieInfo.title,
          release_date: movieInfo.release_date,
          poster_path: movieInfo.poster_path,
          overview: movieInfo.overview,
          vote_average: movieInfo.vote_average,
          runtime: movieInfo.runtime,
          genres: selectedGenres,
        }}
        onSubmit={handleSubmit}
        validationSchema={ModifySchema}
      >
        {({ errors }) => (
          <Form>
            {movieInfo ? (
              <h2 className={styles.title}>edit movie</h2>
            ) : (
              <h2 className={styles.title}>add movie</h2>
            )}
            <TextField label="movie id" name="id" />
            <TextField label="title" name="title" error={errors.title} />
            <TextField label="release date" name="release_date" type="date" />
            <TextField
              label="url"
              name="poster_path"
              error={errors.poster_path}
            />

            <Multiselect
              name="genres"
              genres={movieInfo.genres ? selectedGenres : []}
              handleChange={onMultiselectChange}
              error={errors.genres}
            />

            <TextField label="overview" name="overview" />
            <TextField label="vote_average" name="vote_average" type="number" />
            <TextField label="runtime" name="runtime" error={errors.runtime} />

            <div className={styles.buttonsWrapper}>
              <button className={styles.reset}>reset</button>
              <button type="submit" className={styles.save}>
                save
              </button>
            </div>
          </Form>
        )}
      </Formik>
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
    id: undefined,
    title: '',
    releaseDate: '',
    url: '',
    genres: [],
    overview: '',
    runtime: '',
  },
};

export default ModifyModal;
