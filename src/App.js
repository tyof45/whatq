import React, { Component } from "react";
import './App.css';
import Router from './components/routes/routes'
import Header from './components/header/header';

class App extends Component {

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
        <Router />
        <Header />
      </div >
    )
  };
}

export default App;
