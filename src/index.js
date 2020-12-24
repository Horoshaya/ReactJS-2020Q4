import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import createStore from './store/initialState';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const store = createStore(window.PRELOADED_STATE);

ReactDOM.hydrate(
  <App Router={BrowserRouter} store={store} />,
  document.getElementById('root'),
);
