import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import BurgerStack from './components/BurgerStack';

import Landing_Home from './components/landing_home.js';
import Landing_About from './components/landing_about.js';
import Landing_Service from './components/landing_services.js';
import Landing_Contact from './components/landing_contact.js';


function App() {
const [modalShow, setModalShow] = React.useState(false);


    //scan through all ports and find the ID for the scanner on both mac and Windows
    //then connect to that port using windows or mac connection

  return (

    <Router>

        <div className="App">
        <Switch>
        <Route exact path="/">
            <div id="outer-container">
            <BurgerStack/>
            <main id="page-wrap">
            <Landing_Home/>
            </main>
            </div>
        </Route>

        <Route exact path="/story">
            <div id="outer-container">
            <BurgerStack/>
            <main id="page-wrap">
            <Landing_About/>
            </main>
            </div>
        </Route>

        <Route exact path="/services">
            <div id="outer-container">
            <BurgerStack/>
            <main id="page-wrap">
            <Landing_Service/>
            </main>
            </div>
        </Route>

        <Route exact path="/contact">
            <div id="outer-container">
            <BurgerStack/>
            <main id="page-wrap">
            <Landing_Contact/>
            </main>
            </div>
        </Route>
        </Switch>

        </div>
    </Router>



  );
}


export default App;
