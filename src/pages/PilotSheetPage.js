import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import PilotCardPage from './PilotCardPage'
import {
  PilotCard
} from '../components/cards'
import pilots from '../data/pilots'
import './PilotSheetPage.css'

class PilotSheet extends Component {
  render() {
    const { match } = this.props
    return (
      <div>
        <Route path={`${match.url}/:pilotId`} component={PilotCardPage} />
        <Route exact path={match.url} render={() => (
          <div className="pilot-sheet">
            {pilots
              .sort((a, b) => a.id - b.id)
              .map(pilot => (
                <Link key={pilot.id} to={`${match.url}${pilot.id}`}>
                  <PilotCard pilot={pilot} />
                </Link>
              ))}
          </div>
        )} />
      </div>
    )
  }
}

export default PilotSheet
