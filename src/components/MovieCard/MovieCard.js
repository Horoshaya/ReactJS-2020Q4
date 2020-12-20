import React, { useCallback, useState } from 'react';

import styles from './MovieCard.css';
import MovieMoreInfo from '../MovieMoreInfo/MovieMoreInfo';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import ModifyModal from '../ModifyModal/ModifyModal';
import DeleteModal from '../DeleteModal/DeleteModal';

import defaultImg from '../../assets/images/pulp_fiction.jpg';

const MovieCard = (props) => {
  const [isEditModal, setEditModal] = useState(false);
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [src, setSrc] = useState(props.poster_path);

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

  const date = new Date(props.release_date).getFullYear();

  const onSrcError = () => {
    return setSrc(defaultImg);
  };

  return (
    <>
      <ErrorBoundary>
        <div className={styles.card}>
          <MovieMoreInfo triggerModal={triggerModal} />
          <img className={styles.img} src={src} onError={onSrcError} />
          <div className={styles.mainInfo}>
            <h3>{props.title}</h3>
            <p className={styles.year}>{date}</p>
          </div>
          <p className={styles.year}>{props.vote_average}</p>
          <p className={styles.overview}>{props.overview}</p>
        </div>
      </ErrorBoundary>

      {isEditModal ? (
        <ModifyModal
          triggerModal={triggerModal}
          movieInfo={props}
        ></ModifyModal>
      ) : null}
      {isDeleteModal ? (
        <DeleteModal triggerModal={triggerModal} id={props.id}></DeleteModal>
      ) : null}
    </>
  );
};

export default MovieCard;
