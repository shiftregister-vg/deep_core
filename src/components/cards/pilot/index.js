import React, { Component } from 'react'
import {
  Art,
  Detail,
  Header,
  Mods
} from './parts'
import './Pilot.css'

class PilotCard extends Component {
  render() {
    const { pilot } = this.props

    return (
      <div className={`pilot-card ${pilot.faction}`}>
        <Art
          faction={pilot.faction}
          image={pilot.image} />

        <Header
          faction={pilot.faction}
          name={pilot.name}
          ship={pilot.ship}
          skill={pilot.skill}
          unique={pilot.unique} />

        <Detail
          actions={pilot.actions}
          stats={pilot.stats}
          text={pilot.text} />

        <Mods
          mods={pilot.mods}
          ship={pilot.ship}
          value={pilot.value} />
      </div>
    )
  }
}

export default PilotCard
