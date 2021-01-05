import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Photos from './pages/Photos'
import Contact from './pages/Contact'
import About from './pages/About'


const AppRouter = () => (
  <Switch>
    <Route path="/photos" component={Photos} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Redirect exact from="/" to="/photos" />
  </Switch>
);

export default AppRouter;
