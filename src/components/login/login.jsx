import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <div id="venderSplash">
          <div>
            <img className="logo" alt="logo" src="../../logo-icon.svg" />
            <span id="version">Vendor Demo v0.0.1</span>
            <input type="text" placeholder="email" />
            <br />
            <input type="password" placeholder="password" />
            <br />
            <a href="/builder"><button type="submit">Log In</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
