import React, { memo, useState, useContext } from 'react';
import styles from './SortPanel.css';
import { usePropsLogger } from '../../hooks/usePropsLogger';
import { MainContext } from '../Main/Main';

const InnerSortPanel = ({ headerTitle, list, toggleItem }) => {
  const [listOpen, setListOpen] = useState(false);
  const { sortByDateAndRatingHandle } = useContext(MainContext);

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  usePropsLogger({ headerTitle, list, toggleItem }, 'SortPanel Props');

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
              onClick={() => {
                toggleItem(item.id, item.key);
                sortByDateAndRatingHandle(item.title);
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const SortPanel = memo(InnerSortPanel);
