const cannon = [{
  id: 25,
  name: 'Heavy Laser Cannon',
  type: 'cannon',
  attack: 'Attack 1 ship.',
  text: 'Immediately after rolling your attack dice, you must change all of your __crits__ to __hit__ results.',
  range: '2-3',
  damage: 4,
  value: 7
}, {
  id: 26,
  name: 'Ion Cannon',
  type: 'cannon',
  attack: 'Attack 1 ship.',
  text: 'If this attack hits, the defender suffers 1 damage and receives 1 ion token. Then cancel all dice results.',
  range: '1-3',
  damage: 3,
  value: 3
}, {
  id: 27,
  name: 'Autoblaster',
  type: 'cannon',
  attack: 'Attack 1 ship.',
  text: 'Your __hit__ results cannot be canceled by defense dice.',
  text2: 'The defender may cancel __crits__ before __hit__ results.',
  range: '1',
  damage: 3,
  value: 5
}, {
  id: 28,
  name: 'Flechette Cannon',
  type: 'cannon',
  attack: 'Attack 1 ship.',
  text: 'If this attack hits, the defender suffers 1 damage and, if the defender is not stressed, it also receives 1 stress token. Then cancel all dice results.',
  damage: 3,
  range: '1-3',
  value: 2
}, {
  id: 29,
  name: '"Mangler" Cannon',
  type: 'cannon',
  attack: 'Attack 1 ship.',
  text: 'When attacking, you may change 1 of your hit results to a critical result.',
  range: '1-3',
  damage: 3,
  value: 4
}, {
  id: 30,
  name: 'Tractor Beam',
  type: 'cannon',
  attack: 'Attack 1 ship.',
  text: 'If this attack hits, the defender receives 1 tractor beam token. Then cancel all dice results.',
  range: '1-3',
  damage: 3,
  value: 1
}, {
  id: 31,
  name: 'ARC Caster',
  type: 'cannon',
  attack: 'Attack 1 ship.',
  text: 'If this attack hits, you must choose 1 other ship at Range 1 of the defender to suffer 1 damage.',
  text2: 'Then flip this card.',
  restrictions: 'Rebel and Scum only. Dual card.',
  range: '1',
  damage: 4,
  value: 2
}]
export default cannon.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
