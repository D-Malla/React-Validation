import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Validate from './Components/Validate'
import ThankYou from './Components/ThankYou';



class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Route path='/' exact component={Validate}/>
        <Route path='/thankyou' component={ThankYou}/>
      </div>
    </Router>
    )
  }
}

export default App;
