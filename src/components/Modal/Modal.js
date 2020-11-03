import React from 'react';
import styles from './Modal.css';

const Modal = ({ showMoreInfoModal, isModalShow, children }) => {
  return (
    <>
      {isModalShow ? (
        <div className={styles.wrapper}>
          <div className={styles.modal}>
            <span
              className={styles.closeIcon}
              onClick={showMoreInfoModal}
            ></span>
            {children}
          </div>
          <div className={styles.overlay}></div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
