import ACTIONS from './actionTypes';

export const getMovie = () => {
  return (dispatch) => {
    fetch('http://localhost:4000/movies')
      .then((res) => res.json())
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
    let updatedMovies = allMovies;

    if (genre !== 'All') {
      updatedMovies = allMovies.filter((movie) => movie.genres.includes(genre));
    }

    dispatch({ type: `${ACTIONS.FILTER_BY_GENRE}`, payload: updatedMovies });
  };
};

export const sortByDateAndRating = (type, { allMovies }) => {
  return (dispatch) => {
    let updatedMovies = allMovies;

    if (type === 'rating') {
      updatedMovies = allMovies.sort(
        (movie1, movie2) => movie2.vote_average - movie1.vote_average,
      );
    } else {
      updatedMovies = allMovies.sort(
        (movie1, movie2) =>
          new Date(movie2.release_date) - new Date(movie1.release_date),
      );
    }

    dispatch({
      type: `${ACTIONS.SORT_BY_DATE_AND_RATING}`,
      payload: updatedMovies,
    });
  };
};

export const deletetMovie = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/movies/movies/${id}?`, {
      method: 'DELETE',
    })
      .then(() => {
        dispatch({ type: `${ACTIONS.DELETE_MOVIE}`, payload: id });
        dispatch(getMovie());
      })
      .catch((err) => {
        console.error("Server doesn't response", err);
      });
  };
};

export const addMovie = (movieData) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/movies`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(movieData),
    })
      .then(() => {
        dispatch({ type: `${ACTIONS.EDIT_MOVIE}`, payload: movieData });
        dispatch(getMovie());
      })
      .catch((err) => {
        console.error("Server doesn't response", err);
      });
  };
};

export const editMovie = (movieData) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/movies`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(movieData),
    })
      .then(() => {
        dispatch({ type: `${ACTIONS.EDIT_MOVIE}`, payload: movieData });
        dispatch(getMovie());
      })
      .catch((err) => {
        console.error("Server doesn't response", err);
      });
  };
};
