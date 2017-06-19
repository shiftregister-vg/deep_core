import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { findInDataBy } from '../data'
import pilots, {
  getShipNames,
  imperial_pilots,
  rebel_pilots,
  scum_pilots
} from '../data/pilots'
import {
  astromech,
  bomb,
  cannon,
  cargo,
  crew,
  elite,
  hardpoint,
  illicit,
  missile,
  salvaged_astromech,
  system,
  team,
  tech,
  torpedo,
  turret
} from '../data/upgrades'
import {
  PilotCard,
  UpgradeCard
} from '../components/cards'

/**
 * Shared styles
 * @type {Object}
 */
const style = {
  pilot: {
    marginBottom: 25
  },
  upgrade: {
    marginBottom: 15
  },
  flex: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    margin: '0 auto'
  }
}

// Begin --> Pilot cards
{
  /**
   * Builds a cards section for a given faction and set of pilots
   * @param  {String} faction Faction name (label)
   * @param  {Array} pilots   List of pilots to render
   * @return {Element}        React element for pilots
   */
  const cards = (faction, pilots) => (
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

  // pilot stories
  const stories = storiesOf('Pilot Cards', module)
    .add('for the Rebellion', () => cards('The Rebellion', rebel_pilots))
    .add('for the Galactic Empire', () => cards('The Galactic Empire', imperial_pilots))
    .add('for Scum and Villainy', () => cards('Scum and Villainy', scum_pilots))
    .add('for Epic Ships', () => cards('Epic Ships', findInDataBy(pilots, 'epic', true)))

  // Create a pilot story for each ship
  getShipNames().map( shipName => {
    stories.add(`for ${shipName}`, () => cards(
      shipName, findInDataBy(pilots, 'ship.name', shipName)
    ))
  })
}
// End --> Pilot cards

// Begin --> Upgrade cards
{
  /**
   * Builds a section for upgrade cards of a particular type
   * @param  {String} type      Upgrade type
   * @param  {Array} upgrades   Array of upgrades
   * @return {Element}          React element that renders upgrades
   */
  const cards = (type, upgrades) => (
    <div>
      <h2>{type}</h2>
      <div style={style.flex}>
        {upgrades.map(upgrade => (
          <div key={upgrade.id} style={style.upgrade}>
            <UpgradeCard {...upgrade} />
          </div>
        ))}
      </div>
    </div>
  )

  // upgrade card stories
  const stories = storiesOf('Upgrade Cards', module)
    .add('Astromech', () => cards('Astromech', astromech))
    .add('Bomb', () => cards('Bomb', bomb))
    .add('Cannon', () => cards('Cannon', cannon))
    .add('Cargo', () => cards('Cargo', cargo))
    .add('Crew', () => cards('Crew', crew))
    .add('Elite', () => cards('Elite', elite))
    .add('Hardpoint', () => cards('Hardpoint', hardpoint))
    .add('Illicit', () => cards('Illicit', illicit))
    .add('Missile', () => cards('Missile', missile))
    .add('Salvaged Astromech', () => cards('Salvaged Astromech', salvaged_astromech))
    .add('System', () => cards('System', system))
    .add('Team', () => cards('Team', team))
    .add('Tech', () => cards('Tech', tech))
    .add('Torpedo', () => cards('Torpedo', torpedo))
    .add('Turret', () => cards('Turret', turret))
}
// End --> Upgrade cards
