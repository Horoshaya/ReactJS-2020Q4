import React from 'react';
import styles from './MovieMoreInfo.css';

const MovieMoreInfo = ({ onClick, isShow, openModal }) => {
  return (
    <>
      {isShow ? (
        <ul className={styles.list}>
          <span className={styles.closeIcon} onClick={onClick}></span>
          <li className={styles.button} onClick={openModal}>
            Edit
          </li>
          <li className={styles.button} onClick={openModal}>
            Delete
          </li>
        </ul>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default MovieMoreInfo;
