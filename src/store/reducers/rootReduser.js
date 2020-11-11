import { combineReducers } from 'redux';
import movieReducer from './movie';
import sortingReducer from './sorting';

const rootReducer = combineReducers({
  movieReducer,
  sortingReducer,
});

export default rootReducer;
