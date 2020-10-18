import React from "react";
import styles from "./FilterTab.css";

const FilterTab = ({ key, isActive, children }) => {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      key={key}
    >
      {children}
    </button>
  );
};

export default FilterTab;
