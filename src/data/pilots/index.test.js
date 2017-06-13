import pilots, { getShipNames } from '.'

const simulated_pilots = [{
  ship: { name: 'X-wing' }
}, {
  ship: { name: 'X-wing' }
}, {
  ship: { name: 'TIE Fighter' }
}]

it('gets the names of ships', () => {
  const ships = getShipNames()
  expect(ships.length).toBeGreaterThan(0)
  expect(ships.length).toBeLessThan(pilots.length)
})

it('gets the names of ships from a supplied list', () => {
  const ships = getShipNames(simulated_pilots)

  expect(ships.length).toEqual(2)
  expect(ships).toContain('X-wing')
  expect(ships).toContain('TIE Fighter')
})

it('should ignore epic ships', () => {
  const some_pilots = simulated_pilots.concat([{
    ship: { name: 'C90 Corvette' },
    epic: true
  }])

  const ships = getShipNames(some_pilots)

  expect(ships.length).toEqual(2)
  expect(ships).toContain('X-wing')
  expect(ships).toContain('TIE Fighter')
  expect(ships).toEqual(['TIE Fighter', 'X-wing'])
})

it('should return ships in alphabetical order', () => {
  const ships = getShipNames(simulated_pilots)

  expect(ships.length).toEqual(2)
  expect(ships).toContain('X-wing')
  expect(ships).toContain('TIE Fighter')
  expect(ships[0]).toEqual('TIE Fighter')
  expect(ships[1]).toEqual('X-wing')
})
