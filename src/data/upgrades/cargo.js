const cargo = [{
  id: 32,
  name: 'Backup Shield Generator',
  type: 'cargo',
  limited: true,
  text: 'At the end of each round you may spend up to 1 energy to recover 1 shield (up to your shield value).',
  value: 3
}, {
  id: 33,
  name: 'Comms Booster',
  type: 'cargo',
  limited: false,
  energy: 'Spend 1 energy to remove all stress tokens from friendly ship at Range 1-3. Then assign 1 focus token to that ship.',
  value: 4
}, {
  id: 34,
  name: 'EM Emitter',
  type: 'cargo',
  limited: true,
  text: 'When you obstruct an attack, the defender rolls 3 additional defense dice (instead of 1).',
  value: 3
}, {
  id: 35,
  name: 'Engine Booster',
  type: 'cargo',
  limited: true,
  text: 'Immediately before you reveal your maneuver dial, you may spend 1 energy to execute a white [__straight__ 1] maneuver. You cannot use this ability if you would overlap another ship.',
  value: 3
}, {
  id: 36,
  name: 'Expanded Cargo Hold',
  type: 'cargo',
  limited: false,
  restrictions: 'GR-75 only',
  text: 'Once per round, when you would be dealt a faceup Damage card, you may draw that card from either fore or aft Damage deck.',
  value: 1
}, {
  id: 37,
  name: 'Frequency Jammer',
  type: 'cargo',
  limited: true,
  text: 'When you perform a jam action, choose 1 enemy ship that does not have a stress token and is at Range 1 of the jammed ship. The chosen ship receives 1 stress token.',
  value: 4
}, {
  id: 38,
  name: 'Shield Projector',
  type: 'cargo',
  limited: false,
  text: 'When an enemy ship is declaring either a small or large ship as the target of its attack, you may spend 3 energy to force that ship to target you if possible.',
  value: 4
}, {
  id: 39,
  name: 'Slicer Tools',
  type: 'cargo',
  limited: false,
  action: 'Choose 1 or more enemy ships at Range 1-3 that have a stress token. For each ship chosen, you may spend 1 energy to cause that ship to suffer 1 damage.',
  value: 7
}, {
  id: 40,
  name: 'Tibanna Gas Supplies',
  type: 'cargo',
  limited: true,
  energy: 'You may discard this card to gain 3 energy',
  value: 4
}, {
  id: 41,
  name: 'Ionization Reactor',
  type: 'cargo',
  limited: true,
  energy: 'Spend 5 energy from this card and discard this card to cause each other ship at Range 1 to suffer 1 damage and receive 1 ion token.',
  energy_value: 5,
  value: 4
}, {
  id: 42,
  name: 'Broadcast Array',
  type: 'cargo',
  limited: false,
  restrictions: 'Gozanti-class cruiser only.',
  text: 'Your action bar gains the __jam__ action icon.',
  value: 2
}, {
  id: 43,
  name: 'Docking Clamps',
  type: 'cargo',
  limited: true,
  restrictions: 'Gozanti-class cruiser only.',
  text: 'You may dock up to 4 TIE fighters, TIE Interceptors, TIE bombers, or TIE Advanced to this ship. All of these ships must have the same ship type.',
  value: 0
}, {
  id: 44,
  name: 'Cluster Bombs',
  type: 'cargo',
  limited: false,
  text: 'After defending, you may discard this card. If you do, each other ship at Range 1 of the defending section rolls 2 attack dice, suffering all damage [__hit__] and critical damage [__crit__] rolled.',
  value: 4
}, {
  id: 45,
  name: 'Quick-Release Cargo Locks',
  type: 'cargo',
  limited: true,
  restrictions: 'C-ROC Cruiser and GR-75 only.',
  text: 'At the end of the Activation phase, you may discard this card to place 1 container token.',
  value: 2
}, {
  id: 46,
  name: 'Supercharged Power Cells',
  type: 'cargo',
  limited: true,
  text: 'When attacking, you may discard this card to roll 2 additional attack dice.',
  value: 3
}]

export default cargo.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
