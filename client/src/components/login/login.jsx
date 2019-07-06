import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  submitLogin = (event) => {
    const value = event.target.value;
    this.setState({
      name: value
    });
  };

  render() {
    return (
      <div className="App">
        <div id="venderSplash">
          <div>
            <img className="logo" alt="logo" src="../../logo-icon.svg" />
            <span id="version">Vendor Demo v0.0.1</span>
            <input value={this.props.username} onChange={this.submitLogin} type="text" placeholder="email" />
            <br />
            <input type="password" placeholder="password" />
            <br />
            <Link to="/mobile">
              <button onClick={() => { this.props.loginName(this.state.name) }} className="loginButton" type="submit">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
