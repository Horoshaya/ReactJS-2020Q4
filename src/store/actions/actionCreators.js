import ACTIONS from './actionTypes';

// const getMovie = () => ({
//   type: ACTIONS.GET_MOVIE,
//   payload: movies
// })

// export const getMovie = () => {
//   return (dispatch) => {
//     dispatch({ type: `${ACTIONS.GET_MOVIE}` });
//     fetch('http://localhost:4000/movies')
//       .then(res => res.json())
//       .then(ress => console.log(ress));
//     axios
//       .get(MOVIES_DATA_URL)
//       .then((response) => {
//         const movies = response.data.data;
//         dispatch({
//           type: `${ACTIONS.FETCH_MOVIES}${REQUEST_STATE.SUCCESS}`,
//           payload: movies,
//         });
//       })
//       .catch((err) => {
//         console.error("Server doesn't response", err);
//         dispatch({ type: `${ACTIONS.FETCH_MOVIES}${REQUEST_STATE.ERROR}` });
//       });
//   };
// };

export const getMovie = () => {
  return (dispatch) => {
    fetch('http://localhost:4000/movies')
      .then((res) => res.json())
      .then((movieData) => {
        dispatch({ type: `${ACTIONS.GET_MOVIE}`, payload: movieData.data });
      });
  };
};

export const sortByGenre = (genre, { allMovies }) => {
  return (dispatch) => {
    let updatedMovies = allMovies;

    if (genre !== 'All') {
      updatedMovies = allMovies.filter((movie) => movie.genres.includes(genre));
    }

    dispatch({ type: `${ACTIONS.SORT_BY_GENRE}`, payload: updatedMovies });
  };
};
