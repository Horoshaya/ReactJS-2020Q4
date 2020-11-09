import React from 'react';
import styles from './FilterTab.css';

const FilterTab = ({ isActive, children }) => {
  return (
    <button className={`${styles.button} ${isActive ? styles.active : ''}`}>
      {children}
    </button>
  );
};

export default FilterTab;
