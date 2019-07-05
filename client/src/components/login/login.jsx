import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // handleClick = (event) => {
  //   const message = `${this.state.username}`;
  //   window.alert(message);
  // }

  // submitLogin = (event) => {
  //   console.log(event.target.name);
  //   console.log(event.target.value);
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  render() {
    return (
      <div className="App">
        <div id="venderSplash">
          <div>
            <a href="/builder">
              <img className="logo" alt="logo" src="../../logo-icon.svg" />
            </a>
            <span id="version">Vendor Demo v0.0.1</span>
            <input type="text" placeholder="email" />
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
