import React from 'react';
import { Provider } from 'react-redux';

import styles from './App.css';
import Routes from './components/Routes';

const App = ({ Router, location, context, store }) => {
  return (
    <Provider store={store}>
      <Router location={location} context={context}>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
