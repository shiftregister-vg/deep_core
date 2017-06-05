import React, { Component } from 'react';
import {
  PilotCard
} from './components/cards'
import './App.css';

const dengar = {
  name: 'Dengar',
  unique: true,
  ship: {
    name: 'JumpMaster 5000',
    icon: 'jumpmaster5000'
  },
  text: 'Once per round after defending, if the attacker is inside your firing arc, you may perform an attack against that ship.',
  skill: 9,
  stats: {
    attack: 2,
    agility: 2,
    hull: 5,
    shield: 4
  },
  value: 33,
  actions: [
    'focus',
    'targetlock',
    'barrelroll'
  ],
  mods: [
    'elite',
    'torpedo',
    'torpedo',
    'crew',
    'salvagedastromech',
    'illicit'
  ],
  faction: 'scum',
  image: 'jumpmaster-5000-dengar.jpg'
}

class App extends Component {
  render() {
    return (
      <div>
        <PilotCard pilot={dengar} />
      </div>
    );
  }
}

export default App;
