import React, { Component } from 'react'
import {
  PilotCard
} from './components/cards'
// import { findInDataBy } from './data'
import pilots from './data/pilots'
import './PilotSheet.css'

class PilotSheet extends Component {
  render() {
    return (
      <div className="pilot-sheet">
        {pilots
          .sort((a, b) => a.id - b.id)
          .map(pilot => <PilotCard key={pilot.id} pilot={pilot} />)
        }
      </div>
    )
  }
}

export default PilotSheet
