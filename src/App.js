import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"

import Main from './pages/Main.js'

class App extends Component {
  render() {
    return (

      <BrowserRouter>
      
        <Route path="/" component={Main} />
      
      </BrowserRouter>

    );
  }
}

export default App;
