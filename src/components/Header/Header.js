import React from 'react';

import styles from './Header.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import AddMovieButton from '../AddMovieButton/AddMovieButton';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorBoundaryTestButton from '../ErrorBoundary/ErrorBoundaryTestButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <Logo />
        <AddMovieButton />
      </div>
      <div className={styles.blur}>
        <div className={styles.wrapper}>
          <div className={styles.searchWrapper}>
            <h1 className={styles.mainTitle}>Find your movie</h1>
            <Search />
          </div>
          <ErrorBoundary>
            <ErrorBoundaryTestButton />
          </ErrorBoundary>
        </div>
      </div>
    </header>
  );
};

export default Header;
