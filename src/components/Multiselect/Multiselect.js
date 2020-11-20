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

const Multiselect = ({ genres, handleChange }) => {
  const chooseOption = (event) => {
    event.persist();
    const selectedGanres = [...event.target.selectedOptions].map(
      (option) => option.label,
    );
    console.log(selectedGanres);

    handleChange(selectedGanres);
  };

  return (
    <select
      className={styles.wrapper}
      multiple
      size="10"
      onChange={chooseOption}
    >
      {movieFilters.map((genre) => {
        if (genres.includes(genre.title)) {
          return (
            <option key={genre.id} selected>
              {genre.title}
            </option>
          );
        } else {
          return <option key={genre.id}>{genre.title}</option>;
        }
      })}
    </select>
  );
};

export default Multiselect;
