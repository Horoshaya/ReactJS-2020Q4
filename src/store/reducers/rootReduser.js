import { combineReducers } from 'redux';
import movieDataReducer from './movieData';
import modalMovieOperations from './modalMovieOperations';

const rootReducer = combineReducers({
  movieDataReducer,
  modalMovieOperations,
});

export default rootReducer;
