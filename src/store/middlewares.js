import { setMovieAction } from './actions/actionCreators';

export const getMoviesThunk = (dispatch) => {
  fetch('http://localhost:4000/movies')
    .then((res) => res.json())
    .then((movieData) => {
      dispatch(setMovieAction(movieData.data));
    })
    .catch((err) => {
      console.error("Server doesn't response", err);
    });
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
