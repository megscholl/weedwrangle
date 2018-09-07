import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Main from './pages/Main.js'
import About from './pages/navigation/About.js'
import Press from './pages/navigation/Press.js'
import Contact from './pages/navigation/Contact.js'
import Error from './pages/Error.js'
import Navigation from './pages/Nav.js'

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/about" component={About} />
            <Route path="/press" component={Press} />
            <Route path="/contact" component={Contact} />
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
