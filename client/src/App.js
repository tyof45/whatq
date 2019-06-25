import React, { Component } from "react";
import './App.css';
// import Router from './components/routes/routes'

// class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

  class App extends Component {
    state = {
      renderedResponse: ''
    }

  getResponse = async() => {
    const response = await fetch('/api/builder');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  componentDidMount() {
    this.getResponse()
      .then(res => {
        const someData = res;
        this.setState({ renderedResponse: someData });
      })
  }

  render() {
    const { renderedResponse } = this.state;
    
    return (
      <div className="App">
      <h2>Vendors Page</h2>
      <p>{renderedResponse.express}</p>
        {/* <Router /> */}
        {/* <div id="venderSplash">
          <div>
            <input type="text" placeholder="email"></input> <br />
            <input type="password" placeholder="password"></input> <br />
            <a href="/builder"><button type="submit">Log In</button></a>
          </div>
        </div> */}
      </div >
    )
  };
}


export default App;
