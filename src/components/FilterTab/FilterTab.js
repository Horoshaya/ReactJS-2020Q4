import React from "react";
import styles from "./FilterTab.css";

const FilterTab = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default FilterTab;
