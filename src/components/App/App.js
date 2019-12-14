import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

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
        <Router>
          <Route exact path="/" render={(props) => <Feeling {...props} />} />
          <Route path="/comments" render={(props) => <Comments {...props} />} />
          <Route path="/support" render={(props) => <Supported {...props} />} />
          <Route path="/understanding" render={(props) => <Understanding {...props} />} />
          <Route path="/review" render={(props) => <Review {...props} />} />
          <Route path="/admin" render={(props) => <Admin {...props} />} />
        </Router>
      </div>
    );
  }
}

export default App;
