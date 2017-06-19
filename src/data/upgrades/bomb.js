const bomb = [{
  id: 17,
  name: 'Proximity Mines',
  type: 'bomb',
  value: 3,
  action: 'Discard this card to drop 1 proximity mine token.',
  text: 'When a ship\'s base or maneuver template overlaps this token, this token detonates',
  original_text: 'When a ship executes a maneuver, if its base or maneuver template overlaps this token, this token detonates'
}, {
  id: 18,
  name: 'Seismic Charges',
  type: 'bomb',
  value: 2,
  text: 'When you reveal your maneuver dial, you may discard this card to drop 1 seismic charge token.',
  text2: 'This token detonates at the end of the Activation phase.'
}, {
  id: 19,
  name: 'Proton  Bombs',
  type: 'bomb',
  value: 5,
  text: 'When you reveal your maneuver dial, you may discard this card to drop 1 proton bomb token.',
  text2: 'This token detonates at the end of the Activation phase.'
}, {
  id: 20,
  name: 'Cluster Mines',
  type: 'bomb',
  value: 4,
  action: 'Discard this card to drop 1 cluster mine token set.',
  text: 'When a ship\'s base or maneuver template overlaps a cluster mine token, that token detonates.'
}, {
  id: 21,
  name: 'Conner Net',
  type: 'bomb',
  value: 4,
  action: 'Discard this card to drop 1 Conner net token.',
  text: 'When a ship\'s base or maneuver template overlaps this token, this token detonates.'
}, {
  id: 22,
  name: 'Ion Bombs',
  type: 'bomb',
  value: 2,
  text: 'When you reveal your maneuver dial, you may discard this card to drop 1 ion bomb token.',
  text2: 'This card detonates at the end of the Activation phase.'
}, {
  id: 23,
  name: 'Thermal Detonators',
  type: 'bomb',
  value: 3,
  text: 'When you reveal your maneuver dial, you may discard this card to drop 1 thermal detonator token.',
  text2: 'This token detonates at the end of the Activation phase.'
}, {
  id: 24,
  name: 'Bomblet Generator',
  type: 'bomb',
  unique: true,
  value: 3,
  text: 'When you reveal your maneuver, you may drop 1 bomblet token.',
  text2: 'This token detonates at the end of the Activation phase.'
}]
export default bomb.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
