import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';
import SearchPage from './SearchPage/SearchPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Main />
        <Footer />
      </Route>
      <Route exact path="/search">
        <Header />
        <SearchPage />
        <Footer />
      </Route>
      <Route path="/main" component={Main} />
      <Route path="/NotFound" component={NotFound} />
      <Route path="/*" render={() => <Redirect to="/NotFound" />} />
    </Switch>
  );
};

export default Routes;
