import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../../views/Dashboard';
import Search from '../../views/Search';
import Profile from '../../views/Profile';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/search" component={Search} />
    <Route path="/profile/:id" component={Profile} />
  </Switch>
);

export default Routes;
