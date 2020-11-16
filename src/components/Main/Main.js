import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieList from '../MovieList/MovieList';
import { FiltersSortBar } from '../FiltersSortBar/FiltersSortBar';
import {
  getMovie,
  filterByGenre,
  sortByDateAndRating,
} from '../../store/actions/actionCreators';

export const MainContext = React.createContext();

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  const filterByGenreHandle = (genre) => {
    dispatch(filterByGenre(genre, movieDataReducer));
  };

  const sortByDateAndRatingHandle = (sortTitle) => {
    dispatch(sortByDateAndRating(sortTitle, movieDataReducer));
  };

  const movieDataReducer = useSelector((store) => store.movieDataReducer);

  return (
    <main>
      <MainContext.Provider
        value={{ filterByGenreHandle, sortByDateAndRatingHandle }}
      >
        <FiltersSortBar />
      </MainContext.Provider>
      <MovieList movieReducer={movieDataReducer} />
    </main>
  );
};

export default Main;
