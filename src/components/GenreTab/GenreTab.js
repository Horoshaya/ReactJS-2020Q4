import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './GenreTab.css';
import { MainContext } from '../Main/Main';

let cx = classNames.bind(styles);

const GenreTab = ({ isActive, children }) => {
  const { filterByGenreHandle } = useContext(MainContext);

  const classes = cx({
    button: styles.button,
    active: isActive ? styles.active : '',
  });
  return (
    <button onClick={() => filterByGenreHandle(children)} className={classes}>
      {children}
    </button>
  );
};

export default GenreTab;
