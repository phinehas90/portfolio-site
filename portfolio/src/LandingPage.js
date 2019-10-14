import React from 'react'
import logo from './logo.svg';
import {Link} from 'react-router-dom'

export default function LandingPage(){
    return(
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
    )
}