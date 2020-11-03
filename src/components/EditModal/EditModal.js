import React from 'react';
import Modal from '../Modal/Modal';
import TextField from '../TextField/TextField';
import styles from './EditModal.css';

const EditModal = ({ showMoreInfoModal, isModalShow, movieInfo }) => {
  return (
    <Modal showMoreInfoModal={showMoreInfoModal} isModalShow={isModalShow}>
      <form>
        <h2 className={styles.title}>edit movie</h2>
        <TextField label="movie id" title={movieInfo.id} />
        <TextField label="title" title={movieInfo.title} />
        <TextField label="url" title={movieInfo.url} />
        <div className={styles.buttonsWrapper}>
          <button className={styles.reset}>reset</button>
          <button className={styles.save}>save</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
