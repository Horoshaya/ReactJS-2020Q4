import { setMovieAction, getMovieFromIdAction } from './actions/actionCreators';
require('fetch-everywhere');
console.log('middleware file');

export const getMoviesThunk = (dispatch) => {
  return fetch('http://localhost:4000/movies')
    .then((res) => res.json())
    .then((movieData) => {
      return dispatch(setMovieAction(movieData.data));
    })
    .catch((err) => {
      console.error("Server doesn't response", err);
    });
};

export const getMoviesFromIdThunk = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/movies/${id}?`)
      .then((res) => res.json())
      .then((film) => {
        dispatch(getMovieFromIdAction(film));
      })
      .catch((err) => {
        console.error("Server doesn't response", err);
      });
  };
};

export const deletetMovieThunk = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/movies/${id}?`, {
      method: 'DELETE',
    })
      .then(() => {
        dispatch(getMoviesThunk);
      })
      .catch((err) => {
        console.error("Server doesn't response", err);
      });
  };
};

export const addMovieThunk = (movieData) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/movies`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(movieData),
    })
      .then(() => {
        dispatch(getMoviesThunk);
      })
      .catch((err) => {
        console.error("Server doesn't response", err);
      });
  };
};

export const editMovieThunk = (movieData) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/movies`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(movieData),
    })
      .then(() => {
        dispatch(getMoviesThunk);
      })
      .catch((err) => {
        console.error("Server doesn't response", err);
      });
  };
};
