import ACTIONS from '../actions/actionTypes';

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_MOVIE:
      return {
        ...state,
        movies: action.payload,
        allMovies: action.payload,
      };
    case ACTIONS.FILTER_BY_GENRE:
      return {
        ...state,
        movies: action.payload,
      };
    case ACTIONS.SORT_BY_DATE_AND_RATING:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return null;
  }
};