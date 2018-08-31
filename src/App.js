import React, { Component } from 'react';
import './App.css';
import Nav from './pages/Nav.js'
import Home from './pages/Home.js'
import Footer from './pages/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">

      
       <Nav />
       <Home />
       <Footer />

      </div>
    );
  }
}

export default App;
