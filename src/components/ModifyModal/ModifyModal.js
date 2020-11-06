import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';
import TextField from '../TextField/TextField';
import styles from './ModifyModal.css';

const ModifyModal = ({ triggerModal, movieInfo }) => {
  return (
    <Modal triggerModal={() => triggerModal('modify')}>
      <form>
        <h2 className={styles.title}>edit movie</h2>
        <TextField label="movie id" title={movieInfo.id} />
        <TextField label="title" title={movieInfo.title} />
        <TextField label="url" title={movieInfo.imgUrl} />
        <div className={styles.buttonsWrapper}>
          <button className={styles.reset}>reset</button>
          <button className={styles.save}>save</button>
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
