import React from "react";
import styles from "./MovieSort.css";
import FilterTab from "../FilterTab/FilterTab";

const MovieSort = ({ tabs }) => {
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

export default MovieSort;
