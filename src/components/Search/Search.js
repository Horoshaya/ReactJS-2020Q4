import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Search.css';

const Search = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push({
      pathname: '/search',
      search: `${event.target.value}`,
    });
  };

  return (
    <>
      <input
        onKeyUp={handleSubmit}
        className={styles.input}
        type="text"
        name="title"
        placeholder="What do you want to watch?"
      />
      <button className={styles.button} onClick={handleSubmit}>
        Search
      </button>
    </>
  );
};

export default Search;
