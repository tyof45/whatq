import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <a href="/builder">
        <header>
          <img alt="logo" src="../logo.svg" />
          whatQ
          <p className="vendorUserName">
            ProAbition
          </p>
        </header >
      </a>
    );
  }
}

export default Header;
