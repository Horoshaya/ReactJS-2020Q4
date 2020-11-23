import React, { memo, useState, useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './SortPanel.css';
import { usePropsLogger } from '../../hooks/usePropsLogger';
import { MainContext } from '../Main/Main';

let cx = classNames.bind(styles);

const InnerSortPanel = ({ headerTitle, list, toggleItem }) => {
  const [listOpen, setListOpen] = useState(false);
  const { sortByDateAndRatingHandle } = useContext(MainContext);

  const dropdaownClasses = cx({
    dropdownHeader: true,
    arrowUp: listOpen,
    arrowDown: !listOpen,
  });

  // const itemClasses = cx({
  //   listItem: true,
  //   selected: item.selected,
  // });

  const itemClasses = (item) =>
    cx({
      listItem: true,
      selected: item.selected,
    });

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  usePropsLogger({ headerTitle, list, toggleItem }, 'SortPanel Props');

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>sort by</p>

      <div className={dropdaownClasses} onClick={toggleList}>
        <div className={styles.headerTitle}>{headerTitle}</div>
      </div>

      {listOpen && (
        <ul className={styles.list}>
          {list.map((item) => (
            <li
              className={itemClasses(item)}
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
