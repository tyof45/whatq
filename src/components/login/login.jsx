import React, { Component } from 'react';
import Logo from '../../img/logo-icon.svg';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <div className="App">
        <div id="venderSplash">
          <div>
            <img className="logo" alt="logo" src={Logo} />
            <input type="text" placeholder="email" />
            {' '}
            <br />
            <input type="password" placeholder="password" />
            {' '}
            <br />
            <a href="/builder"><button type="submit">Log In</button></a>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;
