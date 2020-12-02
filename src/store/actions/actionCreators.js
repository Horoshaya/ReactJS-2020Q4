import ACTIONS from './actionTypes';
import {
  editMovieMiddleware,
  addMovieMiddleware,
  deletetMovieMiddleware,
  getMovieMiddleware,
} from '../middlewares';

export const getMovie = () => {
  return (dispatch) => {
    getMovieMiddleware()
      .then((movieData) => {
        dispatch({ type: `${ACTIONS.GET_MOVIE}`, payload: movieData.data });
      })
      .catch((err) => {
        console.error("Server doesn't response", err);
      });
  };
};

export const filterByGenre = (genre, { allMovies }) => {
  return (dispatch) => {
    dispatch({
      type: `${ACTIONS.FILTER_BY_GENRE}`,
      payload: { movies: allMovies, genre: genre },
    });
  };
};

export const sortByDateAndRating = (type, { allMovies }) => {
  return (dispatch) => {
    dispatch({
      type: `${ACTIONS.SORT_BY_DATE_AND_RATING}`,
      payload: { movies: allMovies, type: type },
    });
  };
};

export const deletetMovie = (id) => {
  return (dispatch) => {
    deletetMovieMiddleware(id)
      .then(() => {
        dispatch(getMovie());
      })
      .catch((err) => {
        console.error("Server doesn't response", err);
      });
  };
};

export const addMovie = (movieData) => {
  return (dispatch) => {
    addMovieMiddleware(movieData)
      .then(() => {
        dispatch(getMovie());
      })
      .catch((err) => {
        console.error("Server doesn't response", err);
      });
  };
};

export const editMovie = (movieData) => {
  return (dispatch) => {
    editMovieMiddleware(movieData)
      .then(() => {
        dispatch(getMovie());
      })
      .catch((err) => {
        console.error("Server doesn't response", err);
      });
  };
};
