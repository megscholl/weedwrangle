import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from './pages/Home.js'
import Footer from './pages/Footer.js'
import About from './pages/navigation/About.js'
import Press from './pages/navigation/Press.js'
import Contact from './pages/navigation/Contact.js'
import Calendar from './pages/navigation/Calendar.js'
import Resources from './pages/navigation/Resources.js'

// STATES FROM MAP
import Tennessee from './pages/states/Tennessee'
import Louisiana from './pages/states/Louisiana'
import Texas from './pages/states/Texas'
import Oregon from './pages/states/Oregon'
import Virginia from './pages/states/Virginia'
import Mississippi from './pages/states/Mississippi'
import Florida from './pages/states/Florida'

import Lookout from './pages/states/tennessee/LM.js'

import Error from './pages/Error.js'
import Navigation from './pages/Nav.js'
// import Map from './pages/Map.js'


class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/press" component={Press} />
            <Route path="/contact" component={Contact} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/resources" component={Resources} />

            <Route path="/tn" component={Tennessee} exact>
            
              <Route path="/tn/lookout" component={Lookout} />
            
            </Route>


            <Route path="/la" component={Louisiana} exact/>
            <Route path="/tx" component={Texas} exact/>
            <Route path="/or" component={Oregon} exact />
            <Route path="/va" component={Virginia} exact />
            <Route path="/ms" component={Mississippi} exact />
            <Route path="/fl" component={Florida} exact />

            <Route component={Error}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
