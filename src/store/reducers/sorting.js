import ACTIONS from '../actions/actionTypes';

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.SORT_BY_GENRE:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return null;
  }
};
