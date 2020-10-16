import React from "react";
import styles from "./MovieSort.css";
import FilterTab from "../FilterTab/FilterTab";

const MovieSort = ({ tabs }) => {
  return (
    <>
      {tabs.map((tab) => (
        <FilterTab>{tab}</FilterTab>
      ))}
    </>
  );
};

export default MovieSort;
