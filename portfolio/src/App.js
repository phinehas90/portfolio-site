import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import LandingPage from './LandingPage'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to='/about'>
            Hi! I'm Corey. I build software and web-sites and I'm looking for somebody to pay me for services rendered.
          </Link>
        </header>
      </div>
      <Switch>
        <Route exact path="/about">
          <LandingPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
