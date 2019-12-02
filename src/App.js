import React from 'react';
import { Route , Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import LoginPage from './components/LoginPage.js';
import HomePage from './components/HomePage.js';
import Banner from './components/Banner.js';
import Header from './components/Header.js';
import SideBar from './components/SideBar.js';
import Balance from './components/Balance.js';
import './App.css';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component ={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
