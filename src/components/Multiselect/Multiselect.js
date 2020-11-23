import React from 'react';
import styles from './Multiselect.css';

const movieFilters = [
  {
    id: 16,
    title: 'Drama',
  },
  {
    id: 17,
    title: 'Documentary',
  },
  {
    id: 18,
    title: 'Comedy',
  },
  {
    id: 19,
    title: 'Horror',
  },
  {
    id: 20,
    title: 'Crime',
  },
  {
    id: 21,
    title: 'Romance',
  },
  { id: 22, title: 'Adventure' },
  {
    id: 23,
    title: 'Action',
  },
  {
    id: 24,
    title: 'Fantasy',
  },
  {
    id: 25,
    title: 'Science Fiction',
  },
];

const Multiselect = ({ genres, name, handleChange, error, errorClassName }) => {
  return (
    <>
      <label className={styles.label}>
        genre
        <select
          className={styles.wrapper}
          multiple
          size="10"
          name={name}
          value={genres}
          onChange={handleChange}
        >
          {movieFilters.map((genre) => {
            return (
              <option value={genre.title} key={genre.id} label={genre.title} />
            );
          })}
        </select>
      </label>
      {error ? <div className={styles.error}>{error}</div> : null}
    </>
  );
};

export default Multiselect;
