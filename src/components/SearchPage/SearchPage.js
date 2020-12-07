import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import MovieList from '../MovieList/MovieList';
import { getMovieFromTitle } from '../../store/actions/actionCreators';

const SearchPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch(props);

  useEffect(() => {
    dispatch(getMovieFromTitle(history.location.query));
  }, []);

  const movieDataReducer = useSelector((store) => store.movieDataReducer);
  return (
    <main>
      <MovieList
        movieReducer={movieDataReducer.movies.length ? movieDataReducer : null}
      />
    </main>
  );
};

export default SearchPage;
