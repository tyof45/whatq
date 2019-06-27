import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Builder from '../builder/builder'
import Login from '../login/login';
import Mobile from '../mobile/mobile';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/builder" component={Builder} />
      <Route path="/mobile" component={Mobile} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
