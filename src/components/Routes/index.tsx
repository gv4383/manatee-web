import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../../views/Dashboard';
import Match from '../../views/Match';
import Profile from '../../views/Profile';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/match" component={Match} />
    <Route path="/profile/:id" component={Profile} />
  </Switch>
);

export default Routes;
