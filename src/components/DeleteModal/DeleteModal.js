import React from 'react';
import Modal from '../Modal/Modal';
import styles from './DeleteModal.css';

const DeleteModal = ({ showMoreInfoModal, isModalShow }) => {
  return (
    <Modal showMoreInfoModal={showMoreInfoModal} isModalShow={isModalShow}>
      <form>
        <h2 className={styles.title}>delete movie</h2>
        <p>Are you sure you want to delete this movie?</p>
        <button className={styles.button}>confirm</button>
      </form>
    </Modal>
  );
};

export default DeleteModal;
