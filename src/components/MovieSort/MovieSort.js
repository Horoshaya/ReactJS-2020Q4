import React, { memo, useState } from 'react';
import styles from './MovieSort.css';
import { usePropsLogger } from '../../hooks/usePropsLogger';

const InnerMovieSort = ({ headerTitle, list, toggleItem }) => {
  const [listOpen, setListOpen] = useState(false);

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  usePropsLogger({ headerTitle, list, toggleItem }, 'MovieSort Props');

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>sort by</p>

      <div
        className={`${styles.dropdownHeader} ${
          listOpen ? styles.arrowUp : styles.arrowDown
        }`}
        onClick={toggleList}
      >
        <div className={styles.headerTitle}>{headerTitle}</div>
      </div>

      {listOpen && (
        <ul className={styles.list}>
          {list.map((item) => (
            <li
              className={`${styles.listItem} ${
                item.selected ? styles.selected : ''
              }`}
              key={item.id}
              onClick={() => toggleItem(item.id, item.key)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const MovieSort = memo(InnerMovieSort);
