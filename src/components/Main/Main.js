import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieList from '../MovieList/MovieList';
import { FiltersBar } from '../FiltersBar/FiltersBar';

import { getMovie, sortByGenre } from '../../store/actions/actionCreators';

export const MainContext = React.createContext();

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  const sortMovieByGenre = (genre) => {
    dispatch(sortByGenre(genre, movieReducer));
  };

  const movieReducer = useSelector((store) => store.movieReducer);

  return (
    <main>
      <MainContext.Provider value={sortMovieByGenre}>
        <FiltersBar />
      </MainContext.Provider>
      <MovieList movieReducer={movieReducer} />
    </main>
  );
};

export default Main;
