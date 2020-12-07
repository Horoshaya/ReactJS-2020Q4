import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './Search.css';
import { getMovieFromTitle } from '../../store/actions/actionCreators';

const Search = () => {
  const history = useHistory();

  const handleSubmit = ({ target }) => {
    history.push({
      pathname: '/search',
      search: `${target.title.value}`,
      query: `${target.title.value}`,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="What do you want to watch?"
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
