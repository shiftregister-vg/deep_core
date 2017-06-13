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
  PilotCard
} from '../components/cards'

/**
 * Shared styles
 * @type {Object}
 */
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
        {upgrades.map(upgrade => <div key={upgrade.id}></div>)}
      </div>
    </div>
  )

  // upgrade card stories
  const stories = storiesOf('Upgrade Cards', module)
    .add('Astromechs', () => cards('Astromechs', []))
    .add('Bomb', () => cards('Bomb', []))
    .add('Cannon', () => cards('Cannon', []))
    .add('Cargo', () => cards('Cargo', []))
    .add('Crew', () => cards('Crew', []))
    .add('Elite', () => cards('Elite', []))
    .add('Hardpoint', () => cards('Hardpoint', []))
    .add('Illicit', () => cards('Illicit', []))
    .add('Missiles', () => cards('Missiles', []))
    .add('Torpedoes', () => cards('Torpedoes', []))
    .add('Salvaged Astromechs', () => cards('Salvaged Astromechs', []))
    .add('System', () => cards('System', []))
    .add('Team', () => cards('Team', []))
    .add('Tech', () => cards('Tech', []))
    .add('Turret', () => cards('Turret', []))
}
// End --> Upgrade cards
