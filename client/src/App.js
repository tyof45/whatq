import React, { Component } from 'react';
import './App.css';
import Router from './components/routes/routes';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Mobile from './components/mobile/mobile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "hello"
    };
  }


  render() {
    return (
      <div className="App">
        <Router path='/dashboard'
          render={() => <Mobile name={this.state.name} isAuthed={true} />}
        />
        <Header />
        <Footer />
      </div>
    );
  }
}


export default App;
