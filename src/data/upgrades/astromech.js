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
}, {
  id: 5,
  name: 'R2 Astromech',
  type: 'astromech',
  unique: false,
  value: 1,
  text: 'You may treat all 1- and 2-speed maneuvers as green maneuvers.'
}, {
  id: 6,
  name: 'R2-D6',
  type: 'astromech',
  unique: true,
  value: 1,
  text: 'Your upgrade bar gains the __elite__ upgrade icon.',
  text2: 'You cannot equip this upgrade if you already have a __elite__ upgrade icon or if your pilot skill value is "2" or lower.'
}, {
  id: 7,
  name: 'R3-A2',
  type: 'astromech',
  unique: true,
  value: 2,
  text: 'When you declare the target of your attack, if the defender is inside your firing arc, you may receive 1 stress token to cause the defender to receive 1 stress token.'
}, {
  id: 8,
  name: 'R4-D6',
  type: 'astromech',
  unique: true,
  value: 1,
  text: 'When you are hit by an attack and there are at least 3 uncancelled __hit__ results, you may choose and cancel those results until there are 2 remaining. For each result cancelled in this way, receive 1 stress token.'
}, {
  id: 9,
  name: 'R5-P9',
  type: 'astromech',
  unique: true,
  value: 3,
  text: 'At the end of the Combat phase, you may spend 1 of your focus tokens to recover 1 shield (up to your shield value).'
}, {
  id: 10,
  name: 'R7-T1',
  type: 'astromech',
  unique: true,
  value: 3,
  action: 'Choose an enemy ship at Range 1-2. If you are inside that ship\'s firing arc, you may acquire a target lock on that ship. Then, you may perform a free boost action.'
}, {
  id: 11,
  name: 'R7 Astromech',
  type: 'astromech',
  unique: false,
  value: 2,
  text: 'Once per round when defending, if you have a target lock on the attacker, you may spend the target lock to choose any or all attack dice. The attacker must reroll the chosen dice.'
}, {
  id: 12,
  name: 'BB-8',
  type: 'astromech',
  unique: true,
  value: 2,
  text: 'When you reveal a green maneuver, you may perform a free barrel roll action.'
}, {
  id: 13,
  name: 'R5-X3',
  type: 'astromech',
  unique: true,
  value: 1,
  text: 'Before you reveal your maneuver, you may discard this card to ignore obstacles until the end of the round.'
}, {
  id: 14,
  name: 'Targeting Astromech',
  type: 'astromech',
  unique: false,
  value: 2,
  text: 'After you execute a red maneuver, you may acquire a target lock.'
}, {
  id: 15,
  name: 'R3 Astromech',
  type: 'astromech',
  unique: false,
  value: 2,
  text: 'Once per round, when attacking with a primary weapon, you may cancel 1 of your __focus__ results during the "Modify Attack Dice" step to assign 1 evade token to your ship.'
}, {
  id: 16,
  name: 'M9-G8',
  type: 'astromech',
  unique: true,
  value: 3,
  text: 'When a ship you have locked is attacking, you may choose 1 attack die. The attacker must reroll that die.',
  text2: 'You can acquire target locks on other friendly ships.'
}]

export default astromech.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
