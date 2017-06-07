import React, { Component } from 'react'
import {
  PilotCard
} from '../components/cards'
import { findInDataBy } from '../data'
import pilots from '../data/pilots'
import './PilotSheetPage.css'

class PilotSheet extends Component {
  render() {
    const { pilotId } = this.props.match.params
    const pilot = findInDataBy(pilots, 'id', pilotId, true)
    return (
      <PilotCard pilot={pilot} />
    )
  }
}

export default PilotSheet
