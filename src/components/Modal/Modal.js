import React from 'react';
import styles from './Modal.css';

const Modal = ({ triggerModal, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <span className={styles.closeIcon} onClick={triggerModal}></span>
        {children}
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default Modal;
