import React from "react";
import styles from "./Header.scss";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import AddMovieButton from "../AddMovieButton/AddMovieButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.blur}>
          <div className={styles.headerTop}>
            <Logo />
            <AddMovieButton />
          </div>

          <div className={styles.searchWrapper}>
            <h1 className={styles.mainTitle}>Find your movie</h1>
            <Search />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
