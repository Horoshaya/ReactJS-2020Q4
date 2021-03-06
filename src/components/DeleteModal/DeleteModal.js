import React from 'react';
import { useDispatch } from 'react-redux';

import Modal from '../Modal/Modal';
import styles from './DeleteModal.css';
import { deletetMovieThunk } from '../../store/middlewares';

const DeleteModal = ({ triggerModal, id }) => {
  const dispatch = useDispatch();

  const deleteMovieHandle = () => {
    dispatch(deletetMovieThunk(id));
    triggerModal('delete');
  };
  return (
    <Modal triggerModal={() => triggerModal('delete')}>
      <h2 className={styles.title}>delete movie</h2>
      <p>Are you sure you want to delete this movie?</p>
      <button className={styles.button} onClick={deleteMovieHandle}>
        confirm
      </button>
    </Modal>
  );
};

export default DeleteModal;
// 269149;
