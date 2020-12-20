import ACTIONS from './actionTypes';

export const setMovieAction = (movieData) => ({
  type: `${ACTIONS.GET_MOVIE}`,
  payload: movieData,
});

export const filterByGenreAction = (genre, { allMovies }) => ({
  type: `${ACTIONS.FILTER_BY_GENRE}`,
  payload: { movies: allMovies, genre: genre },
});

export const sortByDateAndRatingAcrtion = (type, { allMovies }) => ({
  type: `${ACTIONS.SORT_BY_DATE_AND_RATING}`,
  payload: { movies: allMovies, type: type },
});

export const getMovieFromTitleAction = (title) => ({
  type: `${ACTIONS.SEARCH_BY_TITLE}`,
  payload: title,
});

export const getMovieFromIdAction = (film) => ({
  type: `${ACTIONS.SEARCH_BY_ID}`,
  payload: film,
});
