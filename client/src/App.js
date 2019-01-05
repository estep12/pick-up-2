import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main.js'
import Nav from './components/Nav/Nav.js'
import Footer from './components/Footer/Footer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
          <div className="container">
            <Main />
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
