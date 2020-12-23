import {
  getMoviesThunk,
  getMoviesFromIdThunk,
  deletetMovieThunk,
  addMovieThunk,
  editMovieThunk,
} from './middlewares';

import {
  setMovieAction,
  filterByGenreAction,
  sortByDateAndRatingAcrtion,
  getMovieFromTitleAction,
  getMovieFromIdAction,
} from './actions/actionCreators';

export default {
  getMoviesThunk,
  getMoviesFromIdThunk,
  deletetMovieThunk,
  addMovieThunk,
  editMovieThunk,
  setMovieAction,
  filterByGenreAction,
  sortByDateAndRatingAcrtion,
  getMovieFromTitleAction,
  getMovieFromIdAction,
};
