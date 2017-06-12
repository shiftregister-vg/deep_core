import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { findInDataBy } from '../data'
import pilots, {
  imperial_pilots,
  rebel_pilots,
  scum_pilots
} from '../data/pilots'
import {
  PilotCard
} from '../components/cards'

const style = {
  pilot: {
    marginBottom: 25
  },
  flex: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    margin: '0 auto'
  }
}

const pilotCards = (faction, pilots) => (
  <div>
    <h2>{faction}</h2>
    <div style={style.flex}>
      {pilots.map(pilot => (
        <div style={style.pilot} key={pilot.id}>
          <PilotCard pilot={pilot} />
        </div>
      ))}
    </div>
  </div>
)

const upgradeCards = (type, upgrades) => (
  <div>
    <h2>{type}</h2>
    <div style={style.flex}>
      {upgrades.map(upgrade => <div key={upgrade.id}></div>)}
    </div>
  </div>
)

storiesOf('Pilot Cards', module)
  .add('for the Rebellion', () => pilotCards('The Rebellion', rebel_pilots))
  .add('for the Galactic Empire', () => pilotCards('The Galactic Empire', imperial_pilots))
  .add('for Scum and Villainy', () => pilotCards('Scum and Villainy', scum_pilots))
  .add('for Epic Ships', () => pilotCards('Epic Ships', findInDataBy(pilots, 'epic', true)))

storiesOf('Upgrade Cards', module)
  .add('Astromechs', () => upgradeCards('Astromechs', []))
  .add('Bomb', () => upgradeCards('Bomb', []))
  .add('Cannon', () => upgradeCards('Cannon', []))
  .add('Cargo', () => upgradeCards('Cargo', []))
  .add('Crew', () => upgradeCards('Crew', []))
  .add('Elite', () => upgradeCards('Elite', []))
  .add('Hardpoint', () => upgradeCards('Hardpoint', []))
  .add('Illicit', () => upgradeCards('Illicit', []))
  .add('Missiles', () => upgradeCards('Missiles', []))
  .add('Torpedoes', () => upgradeCards('Torpedoes', []))
  .add('Salvaged Astromechs', () => upgradeCards('Salvaged Astromechs', []))
  .add('System', () => upgradeCards('System', []))
  .add('Team', () => upgradeCards('Team', []))
  .add('Tech', () => upgradeCards('Tech', []))
  .add('Turret', () => upgradeCards('Turret', []))
