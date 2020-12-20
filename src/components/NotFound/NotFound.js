import React from 'react';
import styles from './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Page not found</h2>
      <Link to="/" className={styles.button}>
        go back to home
      </Link>
    </div>
  );
};

export default NotFound;
