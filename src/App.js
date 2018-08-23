import React, { Component } from 'react';
import './App.css';
import Nav from './pages/Nav.js'
import Video from './pages/Video.js'

class App extends Component {
  render() {
    return (
      <div className="App">

       <Nav />
       <Video />

      </div>
    );
  }
}

export default App;
