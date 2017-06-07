import React, { Component } from 'react';
import {
  PilotCard
} from './components/cards'
// import { findInDataBy } from './data'
import pilots from './data/pilots'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app">
          {pilots
            .sort((a, b) => a.id - b.id)
            .map(pilot => <PilotCard key={pilot.id} pilot={pilot} />)
          }
        </div>
        <hr />
        <h2 style={{textAlign: 'center'}}>{pilots.length} Pilots</h2>
      </div>
    );
  }
}

export default App;
