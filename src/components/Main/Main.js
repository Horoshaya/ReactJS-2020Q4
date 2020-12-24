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
  console.log('Main component');
  const dispatch = useDispatch();

  dispatch(getMoviesThunk);
  // useEffect(() => {
  //   console.log('useEffect');
  //   dispatch(getMoviesThunk);
  // });

  const filterByGenreHandle = (genre) => {
    dispatch(filterByGenreAction(genre, movieDataReducer));
  };

  const sortByDateAndRatingHandle = (sortTitle) => {
    dispatch(sortByDateAndRatingAcrtion(sortTitle, movieDataReducer));
  };

  const movieDataReducer = useSelector((store) => {
    console.log('useSelector, store', store);
    return store.movieDataReducer;
  });

  return (
    <main>
      <MainContext.Provider
        value={{ filterByGenreHandle, sortByDateAndRatingHandle }}
      >
        <FiltersSortBar />
      </MainContext.Provider>
      <MovieList
        movies={movieDataReducer ? movieDataReducer.allMovies : null}
      />
    </main>
  );
};

export default Main;
