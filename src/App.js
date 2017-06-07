import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import PilotSheet from './PilotSheet'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <div className="app">
          <Route exact path="/" component={HomePage} />
          <Route path="/pilot-sheet" component={PilotSheet} />
        </div>
      </div>
    );
  }
}

export default App;
