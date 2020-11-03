import React from 'react';
import styles from './MovieMoreInfoButton.css';
import styless from '../MovieMoreInfo/MovieMoreInfo.css';

const MovieMoreInfoButton = ({ showMoreInfoModal, isModalShow, openModal }) => {
  return (
    <>
      <div className={styles.button} onClick={showMoreInfoModal}></div>
      {isModalShow ? (
        <ul className={styless.list}>
          <span
            className={styless.closeIcon}
            onClick={showMoreInfoModal}
          ></span>
          <li className={styless.button} onClick={() => openModal('edit')}>
            Edit
          </li>
          <li className={styless.button} onClick={() => openModal('delete')}>
            Delete
          </li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default MovieMoreInfoButton;
