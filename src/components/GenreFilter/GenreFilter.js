import React, { memo } from 'react';
import styles from './GenreFilter.css';
import GenreTab from '../GenreTab/GenreTab';

const GenreFilter = ({ tabs }) => {
  return (
    <>
      {tabs.map((tab) => (
        <GenreTab key={tab.id} isActive={tab.isActive}>
          {tab.title}
        </GenreTab>
      ))}
    </>
  );
};

export default memo(GenreFilter);
