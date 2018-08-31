import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home.js'
import Footer from './pages/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">

       <Home />
       <Footer />

      </div>
    );
  }
}

export default App;
