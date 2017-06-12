import React, { Component } from 'react'
import {
  Art,
  Detail,
  EpicHeader,
  Header,
  Slots
} from './parts'
import '../../../xwingfont/xwing-miniatures.css'
import './Pilot.css'

class PilotCard extends Component {
  getHeader = (pilot) => {
    if (pilot.epic === true) {
      return (
        <EpicHeader
          faction={pilot.faction}
          name={pilot.name}
          ship={pilot.ship}
          skill={pilot.skill} />
      )
    }

    return (
      <Header
        faction={pilot.faction}
        name={pilot.name}
        ship={pilot.ship}
        skill={pilot.skill}
        unique={pilot.unique} />
    )
  }
  render() {
    const { pilot } = this.props

    return (
      <div className={`pilot-card ${pilot.faction}`}>
        <Art
          faction={pilot.faction}
          image={pilot.image} />

        {this.getHeader(pilot)}

        <Detail
          actions={pilot.actions}
          stats={pilot.stats}
          text={pilot.text} />

        <Slots
          slots={pilot.slots}
          ship={pilot.ship}
          value={pilot.value} />
      </div>
    )
  }
}

export default PilotCard
