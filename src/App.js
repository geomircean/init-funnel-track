import React, { Component } from 'react';
//import logo from './logo.svg';
import NavMenu from './components/Menu';
import './App.css';
import AppRoutes from './AppRoutes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu/>
        <AppRoutes/>
      </div>
    );
  }
}

export default App;
