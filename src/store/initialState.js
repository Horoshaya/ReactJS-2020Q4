import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReduser';

export default (initialState) => {
  console.log('initialState', initialState);
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
};
