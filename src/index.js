import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import createStore from './store/initialState';

const store = createStore(window.PRELOADED_STATE);

ReactDOM.hydrate(
  <App Router={BrowserRouter} store={store} />,
  document.getElementById('root'),
);
