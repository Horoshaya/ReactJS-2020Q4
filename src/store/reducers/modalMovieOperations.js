import ACTIONS from '../actions/actionTypes';

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_MOVIE:
      return {
        ...state,
      };
    case ACTIONS.EDIT_MOVIE:
      return {
        ...state,
      };
    case ACTIONS.DELETE_MOVIE:
      return {
        ...state,
      };
    default:
      return null;
  }
};
