import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Builder from '../builder/builder'
import Login from '../login/login';
import Mobile from '../mobile/mobile';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  loginName = (userName) => {
    this.setState({ name: userName })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(routeProps) => (
            <Login {...routeProps} loginName={this.loginName} />
          )} />
          <Route path="/builder" component={Builder} />
          <Route path="/mobile" render={(routeProps) => (
            <Mobile {...routeProps} name={this.state.name} />
          )} />
        </Switch>
      </BrowserRouter>
    )
  }
};

export default Routes;
