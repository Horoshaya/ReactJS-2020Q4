import { combineReducers } from 'redux';
import movieDataReducer from './movieData';

const rootReducer = combineReducers({
  movieDataReducer,
});

export default rootReducer;
