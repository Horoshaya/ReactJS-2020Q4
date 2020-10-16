import React from "react";
import styles from "./Search.css";

const Search = () => {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="What do you want to watch?"
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
