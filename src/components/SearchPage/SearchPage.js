import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import MovieList from '../MovieList/MovieList';
import { getMovieFromTitleAction } from '../../store/actions/actionCreators';

const SearchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  dispatch(getMovieFromTitleAction(location.search.substring(1)));

  const movieDataReducer = useSelector((store) => store.movieDataReducer);

  return (
    <main>
      <MovieList
        movies={movieDataReducer ? movieDataReducer.searchedMovies : null}
      />
    </main>
  );
};

export default SearchPage;
