import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';
import SearchPage from './SearchPage/SearchPage';
import MovieDetails from './MovieDetails/MovieDetails';

const Routes = () => {
  return (
    <Switch>
      <Route path="/main" component={Main} />
      <Route exact path="/movie/:id">
        <MovieDetails />
        <Footer />
      </Route>
      <Route exact path="/">
        <Header />
        <Main />
        <Footer />
      </Route>
      <Route path="/search">
        <Header />
        <SearchPage />
        <Footer />
      </Route>
      <Route path="/*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
