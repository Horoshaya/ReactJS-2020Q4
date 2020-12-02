import React from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Link to="/test">Home</Link>
        <Header />
        <Main />
        <Footer />
      </Route>
      <Route path="/main" component={Main} />
      <Route path="/test">
        <Header />
        <Main />
        <Footer />
      </Route>
      <Route path="/NotFound" component={NotFound} />
      <Route path="/*" render={() => <Redirect to="/NotFound" />} />
    </Switch>
  );
};

export default Routes;
