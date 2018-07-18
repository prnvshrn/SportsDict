import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPanel from './components/main_components.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPanel/>
      </div>
    );
  }
}

export default App;
