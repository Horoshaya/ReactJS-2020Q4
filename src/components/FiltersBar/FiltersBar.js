import React from "react";
import styles from "./FiltersBar.css";
import MovieFilters from "../MovieFilters/MovieFilters";
import MovieSort from "../MovieSort/MovieSort";

const movieFilters = ["All", "Documentary", "Comedy", "Horror", "Crime"];

const movieSorrt = ["Sort by", "Release Date"];

const FiltersBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.movieFilters}>
        <MovieFilters tabs={movieFilters} />
      </div>
      <div className={styles.movieFilters}>
        <MovieSort tabs={movieSorrt} />
      </div>
    </div>
  );
};

export default FiltersBar;
