import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" render={(props) => <Feeling {...props} />} />
          <Route path="/comments" render={(props) => <Comments {...props} />} />
          <Route path="/support" render={(props) => <Support {...props} />} />
          <Route path="/understanding" render={(props) => <Understanding {...props} />} />
          <Route path="/review" render={(props) => <Review {...props} />} />
          <Route path="/success" render={(props) => <Success {...props} />} />
          <Route path="/admin" render={(props) => <Admin {...props} />} />
        </Router>
      </div>
    );
  }
}

export default App;
