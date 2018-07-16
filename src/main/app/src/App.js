import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Thing from './Thing.js'
import {toggle_feature1, toggle_feature2} from './Toggles';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Thing toggles={window.toggles} switch_on={toggle_feature1} />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
