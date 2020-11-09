import React, { useCallback, useState } from 'react';

import styles from './MovieCard.css';
import MovieMoreInfo from '../MovieMoreInfo/MovieMoreInfo';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ModifyModal from '../ModifyModal/ModifyModal';
import DeleteModal from '../DeleteModal/DeleteModal';

const MovieCard = (props) => {
  const [isEditModal, setEditModal] = useState(false);
  const [isDeleteModal, setDeleteModal] = useState(false);

  const triggerModal = useCallback(
    (modalName) => {
      if (modalName === 'modify') {
        setEditModal(!isEditModal);
      } else if (modalName === 'delete') {
        setDeleteModal(!isDeleteModal);
      }
    },
    [isDeleteModal, isEditModal],
  );

  return (
    <>
      <ErrorBoundary>
        <div className={styles.card}>
          <MovieMoreInfo triggerModal={triggerModal} />
          <img className={styles.img} src={props.imgUrl} />
          <div className={styles.mainInfo}>
            <h3>{props.title}</h3>
            <p className={styles.year}>{props.year}</p>
          </div>
          <p>{props.description}</p>
        </div>
      </ErrorBoundary>

      {isEditModal ? (
        <ModifyModal
          triggerModal={triggerModal}
          movieInfo={props}
        ></ModifyModal>
      ) : null}
      {isDeleteModal ? (
        <DeleteModal triggerModal={triggerModal}></DeleteModal>
      ) : null}
    </>
  );
};

export default MovieCard;
