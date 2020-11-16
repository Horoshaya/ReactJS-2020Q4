import React, { useContext } from 'react';
import styles from './GenreTab.css';
import { MainContext } from '../Main/Main';

const GenreTab = ({ isActive, children }) => {
  const { filterByGenreHandle } = useContext(MainContext);
  return (
    <button
      onClick={() => filterByGenreHandle(children)}
      className={`${styles.button} ${isActive ? styles.active : ''}`}
    >
      {children}
    </button>
  );
};

export default GenreTab;
