import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieList from '../MovieList/MovieList';
import { FiltersSortBar } from '../FiltersSortBar/FiltersSortBar';
import {
  filterByGenreAction,
  sortByDateAndRatingAcrtion,
} from '../../store/actions/actionCreators';
import { getMoviesThunk } from '../../store/middlewares';

export const MainContext = React.createContext();

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesThunk);
  }, []);

  const filterByGenreHandle = (genre) => {
    dispatch(filterByGenreAction(genre, movieDataReducer));
  };

  const sortByDateAndRatingHandle = (sortTitle) => {
    dispatch(sortByDateAndRatingAcrtion(sortTitle, movieDataReducer));
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
