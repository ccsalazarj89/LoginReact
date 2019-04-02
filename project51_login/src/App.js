import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/LoginTest.css';



import Navigation from './components/navigation';
import Logintest from './components/Logintest';


class App extends Component {
  render() {
    return (
      <div className="App">
       <img src={logo} className="App-logo" alt="logo"/>
      <Logintest/>
      <Navigation titulo ="Tabulacion numero # 1"/>
      </div>
    );
  }
}



export default App;
