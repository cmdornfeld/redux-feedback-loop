import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
      </div>
    );
  }
}

export default App;
