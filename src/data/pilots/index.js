import imperial_pilots from './empire'
import rebel_pilots from './rebels'
import scum_pilots from './scum'

/**
 * Concatenated list of pilots from all factions
 * @type {Array}
 */
const pilots = []
  .concat(rebel_pilots)
  .concat(imperial_pilots)
  .concat(scum_pilots)

/**
 * getShipNames is a function for getting a unique, sorted list
 * of ship names from a list of pilots. This list can be optionally
 * passed in or, in the absense of a provided list, use the globally
 * defined pilots.
 * @param {Array} pilotsIn  An optional list of pilots
 * @return {Array}          A list of sorted, unique ship names
 */
const getShipNames = (pilotsIn) => {
  // get the unique ship names
  // if pilotsIn is undefined then use the global pilots array
  // ignore epic ships
  const names = [...new Set((pilotsIn ? pilotsIn : pilots)
    .filter(pilot => !(pilot.epic === true))
    .map(pilot => pilot.ship.name)
  )]

  // return a sorted list of names
  return names.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0))
}

export default pilots
export {
  getShipNames,
  imperial_pilots,
  rebel_pilots,
  scum_pilots
}
