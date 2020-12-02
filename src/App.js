import React from 'react';
import { Provider } from 'react-redux';

import styles from './App.css';
import Routes from './components/Routes';
import store from './store/initialState';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
