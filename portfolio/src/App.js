import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import LandingPage from "./LandingPage"
import ActualLandingPage from './ActualLandingPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route path="/about">
          <ActualLandingPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
