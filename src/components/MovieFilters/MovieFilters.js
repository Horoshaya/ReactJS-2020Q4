import React, { memo } from 'react';
import styles from './MovieFilters.css';
import FilterTab from '../FilterTab/FilterTab';

const InnerMovieFilters = ({ tabs }) => {
  return (
    <>
      {tabs.map((tab) => (
        <FilterTab key={tab.id} isActive={tab.isActive}>
          {tab.title}
        </FilterTab>
      ))}
    </>
  );
};

export const MovieFilters = memo(InnerMovieFilters);
