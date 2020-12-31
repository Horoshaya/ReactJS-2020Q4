import React, { useState } from 'react';

import styles from './AddMovieButton.css';
import ModifyModal from '../ModifyModal/ModifyModal';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { usePropsLogger } from '../../hooks/usePropsLogger';

const AddMovieButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  usePropsLogger(null, 'AddMovieButton');

  const triggerModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
        <button className={styles.button} onClick={triggerModal}>
          + add movie
        </button>
      {isModalOpen ? (
        <ModifyModal triggerModal={triggerModal}></ModifyModal>
      ) : null}
    </>
  );
};

export default AddMovieButton;
