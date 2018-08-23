import React, { Component } from 'react';
import './App.css';
import Nav from './pages/Nav.js'
import Video from './pages/Video.js'
import Map from './pages/Map.js'

class App extends Component {
  render() {
    return (
      <div className="App">

       <Nav />
       <Video />
       <Map />

      </div>
    );
  }
}

export default App;
