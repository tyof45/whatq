import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "test"
    };
  }

  submitLogin = (event) => {
    const value = event.target.value;
    this.setState({
      name: value
    });
    console.log(this.state.name);
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
            <a href="/mobile"><button className="loginButton" type="submit">Log In</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
