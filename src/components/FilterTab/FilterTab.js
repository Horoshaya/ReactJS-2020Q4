import React, { useContext } from 'react';
import styles from './FilterTab.css';
import { MainContext } from '../Main/Main';

const FilterTab = ({ isActive, children }) => {
  const sortByGenreHandle = useContext(MainContext);
  return (
    <button
      onClick={() => sortByGenreHandle(children)}
      className={`${styles.button} ${isActive ? styles.active : ''}`}
    >
      {children}
    </button>
  );
};

export default FilterTab;
