import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation titulo ="Tabulacion numero # 1"/>
      <Navigation titulo ="Tabulacion numero # 2"/>      
      <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}



export default App;
