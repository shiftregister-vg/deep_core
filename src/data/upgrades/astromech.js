const astromech = [{
  id: 0,
  name: 'R2-D2',
  type: 'astromech',
  unique: true,
  value: 4,
  text: 'After executing a green maneuver, you may recover 1 shield (up to your shield value).'
}, {
  id: 1,
  name: 'R2-F2',
  type: 'astromech',
  unique: true,
  value: 3,
  action: 'Increase your agility value by 1 until the end of this game round.'
}, {
  id: 2,
  name: 'R5-K6',
  type: 'astromech',
  unique: true,
  value: 2,
  text: 'After spending your target lock, roll 1 defense die.',
  text2: 'On an __evade__ result, immediately acquire a target lock on that same ship. You cannot spend this target lock during this attack.'
}, {
  id: 3,
  name: 'R5 Astromech',
  type: 'astromech',
  unique: false,
  value: 1,
  text: 'During the End phase you may choose 1 of your faceup damage cards with the Ship trait and flip it facedown.'
}, {
  id: 4,
  name: 'R5-D8',
  type: 'astromech',
  unique: true,
  value: 3,
  action: 'Roll 1 defense die.',
  text: 'On a __evade__ or __focus__ result, discard 1 of your facedown Damage cards.'
}]

export default astromech
