import React from "react";
import styles from "./MovieFilters.css";
import FilterTab from "../FilterTab/FilterTab";

const MovieFilters = ({ tabs }) => {
  return (
    <>
      {tabs.map((tab) => (
        <FilterTab>{tab}</FilterTab>
      ))}
    </>
  );
};

export default MovieFilters;
