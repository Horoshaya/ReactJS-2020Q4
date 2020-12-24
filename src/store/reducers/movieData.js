import ACTIONS from '../actions/actionTypes';

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_MOVIE:
      console.log('reducer', state);
      return {
        ...state,
        movies: action.payload,
        allMovies: action.payload,
      };
    case ACTIONS.FILTER_BY_GENRE:
      let updatedFilterMovies = action.payload.movies;
      if (action.payload.genre !== 'All') {
        updatedFilterMovies = action.payload.movies.filter((movie) =>
          movie.genres.includes(action.payload.genre),
        );
      }
      return {
        ...state,
        movies: updatedFilterMovies,
      };
    case ACTIONS.SORT_BY_DATE_AND_RATING:
      let updatedMovies = action.payload.movies;
      if (action.payload.type === 'rating') {
        updatedMovies = action.payload.movies.sort(
          (movie1, movie2) => movie2.vote_average - movie1.vote_average,
        );
      } else {
        action.payload.movies = action.payload.movies.sort(
          (movie1, movie2) =>
            new Date(movie2.release_date) - new Date(movie1.release_date),
        );
      }
      return {
        ...state,
        movies: action.payload.movies,
      };
    case ACTIONS.SEARCH_BY_ID:
      return {
        ...state,
        movie: action.payload,
      };
    case ACTIONS.SEARCH_BY_TITLE:
      const searchedMovies = state.allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(action.payload.toLowerCase()),
      );
      return {
        ...state,
        searchedMovies: searchedMovies,
      };
    default:
      return null;
  }
};
