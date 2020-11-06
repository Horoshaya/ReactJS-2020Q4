import React, { useState } from 'react';
import styles from './MovieMoreInfo.css';

const MovieMoreInfo = ({ triggerModal }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const triggerDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className={styles.moreButton} onClick={triggerDropdown}></div>

      {isDropdownOpen ? (
        <ul className={styles.list}>
          <span className={styles.closeIcon} onClick={triggerDropdown}></span>
          <li
            className={styles.itemButton}
            onClick={() => triggerModal('modify')}
          >
            Edit
          </li>
          <li
            className={styles.itemButton}
            onClick={() => triggerModal('delete')}
          >
            Delete
          </li>
        </ul>
      ) : null}
    </>
  );
};

export default MovieMoreInfo;
