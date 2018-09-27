import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Main from './pages/Main.js'
import About from './pages/navigation/About.js'
import Press from './pages/navigation/Press.js'
import Contact from './pages/navigation/Contact.js'
import Calendar from './pages/navigation/Calendar.js'
import Resources from './pages/navigation/Resources.js'

// STATES FROM MAP
import Tennessee from'./pages/states/Tennessee'
import Louisiana from'./pages/states/Louisiana'
import Texas from'./pages/states/Texas'
import Oregon from'./pages/states/Oregon'
import Virginia from'./pages/states/Virginia'
import Mississippi from'./pages/states/Mississippi'
import Florida from './pages/states/Florida'

// // LOCATIONS FROM TENNESSEE PAGE
// import Oak from './pages/states/Tennessee'
// import Sewanee from './pages/states/tennessee/Sewanee'
// import TVA from './pages/states/tennessee/TVA'
// import LM from './pages/states/tennessee/Lookout'
// import TSP from './pages/states/tennessee/TSP'
// import White from './pages/states/tennessee/WhiteHouse'


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
            <Route path="/calendar" component={Calendar} />
            <Route path="/resources" component={Resources} />
            <Route path="/tn" component={Tennessee}/>
            <Route path="/la" component={Louisiana} />
            <Route path="/tx" component={Texas} />
            <Route path="/or" component={Oregon} />
            <Route path="/va" component={Virginia} />
            <Route path="/ms" component={Mississippi} />
            <Route path="/fl" component={Florida} />
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
