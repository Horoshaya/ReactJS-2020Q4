import React from 'react';

import styles from './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import img1 from '../../assets/images/inception.jpg';
import img2 from '../../assets/images/pulp_fiction.jpg';

const movies = [
  {
    id: 1,
    title: 'Coco',
    description:
      "Coco's rich visual pleasures are matched by a thoughtful narrative that takes a family-friendly -- and deeply affecting -- approach to questions of culture, family, life, and death.",
    year: 2020,
    url: img1,
  },
  {
    id: 2,
    title: 'Reservoir Dogs',
    description:
      'The film is regarded as a classic of independent film and a cult film,[4] and was named "Greatest Independent Film of all Time" by Empire.',
    year: 1994,
    url: img2,
  },
  {
    id: 3,
    title: 'LOGAN',
    description:
      'Hugh Jackman makes the most of his final outing as Wolverine with a gritty, nuanced performance in a violent but surprisingly thoughtful superhero action film that defies genre conventions.',
    year: 2019,
    url: img1,
  },
  {
    id: 4,
    title: 'MOONLIGHT',
    description:
      "Moonlight uses one man's story to offer a remarkable and brilliantly crafted look at lives too rarely seen in cinema.",
    year: 2018,
    url: img1,
  },
  {
    id: 5,
    title: 'MOONLIGHT',
    description:
      "Moonlight uses one man's story to offer a remarkable and brilliantly crafted look at lives too rarely seen in cinema.",
    year: 2018,
    url: img1,
  },
  {
    id: 6,
    title: 'MOONLIGHT',
    description:
      "Moonlight uses one man's story to offer a remarkable and brilliantly crafted look at lives too rarely seen in cinema.",
    year: 2018,
    url: img2,
  },
  {
    id: 7,
    title: 'Intercaption',
    description:
      'Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas.',
    year: 2003,
    url: img2,
  },
];

const MovieList = () => {
  return (
    <div className={styles.wrapper}>
      <ErrorBoundary>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            imgUrl={movie.url}
            title={movie.title}
            description={movie.description}
            year={movie.year}
          />
        ))}
      </ErrorBoundary>
    </div>
  );
};

export default MovieList;
