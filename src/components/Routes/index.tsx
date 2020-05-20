import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../../views/Dashboard';
import Profile from '../../views/Profile';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/profile" component={Profile} />
  </Switch>
);

export default Routes;
