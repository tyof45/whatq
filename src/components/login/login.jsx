import React, { Component } from "react";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="App">
        <div id="venderSplash">
          <div>
            <img className="logo" alt="logo" src="../../logo-icon.svg" />
            <span id="version">Vendor Demo v0.0.1</span>
            <input type="text" placeholder="email"></input> <br />
            <input type="password" placeholder="password"></input> <br />
            <a href="/builder"><button type="submit">Log In</button></a>
          </div>
        </div>
      </div >
    )
  };
}


export default Login;
