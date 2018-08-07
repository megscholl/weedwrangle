import React, { Component } from 'react';
import logo from './images/weedwrangle/ww_logo.png';
import './App.css';
import Main from './pages/Main.js'

class App extends Component {
  render() {
    return (
      <div className="App">

      <Main />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
