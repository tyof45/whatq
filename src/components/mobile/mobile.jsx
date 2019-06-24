import React, { Component } from 'react';

class Mobile extends Component {
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
            <h1>Mobile App</h1>
          </div>
        </div>
      </div>
    );
  }
}


export default Mobile;
