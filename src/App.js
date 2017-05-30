import React, { Component } from 'react';
import {
  PilotCard
} from './components/cards'
import './App.css';

const major_stridan = {
  title: '•Major Stridan',
  ship: 'Upsilon-class Shuttle',
  description: 'For the purpose of your actions and Upgrade cards, you may treat friendly ships at Range 2-3 as being at Range 1.',
  skill: 4,
  damage: 4,
  agility: 1,
  hull: 6,
  shield: 6,
  value: 32
}

class App extends Component {
  render() {
    return (
      <div>
        <PilotCard pilot={major_stridan} />
      </div>
    );
  }
}

export default App;
