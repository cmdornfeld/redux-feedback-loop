import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from '../Header/Header';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Supported from '../Supported/Supported';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <Comments />
        <br/>
        <Feeling />
        <br/>
        <Supported />
        <br/>
        <Understanding />
        <br/>
        <Review />
        <br/>
        <Admin />
      </div>
    );
  }
}

export default App;
