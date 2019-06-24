import React, { Component } from "react";
import './App.css';
import Router from './components/routes/routes'
import Header from './components/header/header';
import Footer from './components/footer/footer';

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
        <Footer />
      </div>
    )
  };
}

export default App;
