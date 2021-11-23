import React, { useState } from 'react'
import { Link, Route, Switch } from "react-router-dom";

/* === COMPONENTS === */
import Navbar from './components/primary/Navbar.js'
import Merch from './components/primary/Merch.js'
import Home from './Home.js'
import Footer from './components/primary/Footer.js'

/* === PAGES === */
import Performance from './Performance.js'
import Peripherique from './Peripherique.js'
import Drink from './Drink.js'
import Login from './Login.js'

import './style.css';
import 'normalize.css';

function App() {
  return (
    <div className="app">
        <Navbar />
        <Merch />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/performances'><Performance /></Route>
          <Route path='/peripheriques'><Peripherique /></Route>
          <Route path='/boissons'><Drink /></Route>
          <Route path='/login'><Login /></Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
