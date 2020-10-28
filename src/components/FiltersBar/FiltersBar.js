import React from "react";
import styles from "./FiltersBar.css";
import MovieFilters from "../MovieFilters/MovieFilters";
import MovieSort from "../MovieSort/MovieSort";

const movieFilters = [
  {
    id: 10,
    isActive: true,
    title: "All",
  },
  {
    id: 11,
    isActive: false,
    title: "Documentary",
  },
  {
    id: 12,
    isActive: false,
    title: "Comedy",
  },
  {
    id: 13,
    isActive: false,
    title: "Horror",
  },
  {
    id: 14,
    isActive: false,
    title: "Crime",
  },
];

const movieSort = [
  {
    id: 15,
    isActive: true,
    title: "Sort by",
  },
  {
    id: 16,
    isActive: false,
    title: "elease Date",
  },
];

const FiltersBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.movieFilters}>
        <MovieFilters tabs={movieFilters} />
      </div>
      <div className={styles.movieFilters}>
        <MovieSort tabs={movieSort} />
      </div>
    </div>
  );
};

export default FiltersBar;
