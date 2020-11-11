import React, { memo, useState, useCallback } from 'react';
import styles from './FiltersBar.css';
import { MovieFilters } from '../MovieFilters/MovieFilters';
import { MovieSort } from '../MovieSort/MovieSort';

const movieFilters = [
  {
    id: 10,
    isActive: true,
    title: 'All',
  },
  {
    id: 11,
    isActive: false,
    title: 'Documentary',
  },
  {
    id: 12,
    isActive: false,
    title: 'Comedy',
  },
  {
    id: 13,
    isActive: false,
    title: 'Horror',
  },
  {
    id: 14,
    isActive: false,
    title: 'Crime',
  },
  {
    id: 15,
    isActive: false,
    title: 'Romance',
  },
];

const InnerFiltersBar = (props) => {
  const defaultTitle = 'select sort';
  const sortList = [
    {
      id: 0,
      title: 'release date',
      selected: false,
      key: 'sortList',
    },
    {
      id: 1,
      title: 'title',
      selected: false,
      key: 'sortList',
    },
  ];

  const [title, setTitle] = useState(defaultTitle);
  const [list, setSortList] = useState(sortList);

  const toggleSelected = useCallback(
    (id) => {
      let newSortList = list;
      let newTitle;

      const updatedSortList = newSortList.map((item) => ({
        ...item,
        selected: item.id === id,
      }));
      const selectedItem = updatedSortList.find((item) => item.id === id);
      newTitle = selectedItem ? selectedItem.title : defaultTitle;

      setTitle(newTitle);
      setSortList(newSortList);
    },
    [list],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.movieFilters}>
        <MovieFilters tabs={movieFilters} />
      </div>
      <div className={styles.movieFilters}>
        <MovieSort
          headerTitle={title}
          list={list}
          toggleItem={toggleSelected}
        />
      </div>
    </div>
  );
};

export const FiltersBar = memo(InnerFiltersBar);
