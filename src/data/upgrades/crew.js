const crew = [{
  id: 47,
  name: 'Chewbacca',
  type: 'crew',
  unique: true,
  restrictions: 'Rebel only.',
  text: 'When you are dealt a Damage card, you may immediately discard that card and recover 1 shield.',
  text2: 'Then, discard this upgrade card.',
  value: 4
}, {
  id: 48,
  name: 'Luke Skywalker',
  type: 'crew',
  unique: true,
  restrictions: 'Rebel only.',
  text: 'After you perform an attack that does not hit, you may immediately perform a primary weapon attack. You may change 1 __focus__ result to a __hit__ result. You cannot perform another attack this round.',
  value: 7
}, {
  id: 49,
  name: 'Nien Nunb',
  type: 'crew',
  unique: true,
  restrictions: 'Rebel only.',
  text: 'You may treat all __straight__ maneuvers as green maneuvers.',
  value: 1
}, {
  id: 50,
  name: 'Weapons Engineer',
  type: 'crew',
  unique: false,
  text: 'You may maintain 2 target locks (only 1 per enemy ship).',
  text2: 'When you acquire a target lock, you may lock onto 2 different ships.',
  value: 3
}, {
  id: 51,
  name: 'Gunner',
  type: 'crew',
  unique: false,
  text: 'After you perform an attack that does not hit, you may immediately perform a primary weapon attack. You cannot perform another attack this round.',
  value: 5
}, {
  id: 52,
  name: 'Mercenary Copilot',
  type: 'crew',
  unique: false,
  text: 'When attacking at Range 3, you may change 1 of your __hit__ results to a __crit__ result.',
  value: 2
}, {
  id: 53,
  name: 'Intelligence Agent',
  type: 'crew',
  unique: false,
  text: 'At the start of the Activation phase, choose 1 enemy ship at Range 1-2. You may look at that ship\'s chosen maneuver.',
  value: 1
}, {
  id: 54,
  name: 'Recon Specialist',
  type: 'crew',
  unique: false,
  text: 'When you perform a focus action, assign 1 additional focus token to your ship.',
  value: 3
}, {
  id: 55,
  name: 'Saboteur',
  type: 'crew',
  unique: false,
  action: 'Choose 1 enemy ship at Range 1 and roll 1 attack die. On a __hit__ or __crit__ result, choose 1 random facedown Damage card assigned to that ship, flip it faceup, and resolve it.',
  value: 2
}, {
  id: 56,
  name: 'Darth Vader',
  type: 'crew',
  unique: true,
  restrictions: 'Imperial only.',
  text: 'After you perform an attack against an enemy ship, you may suffer 2 damage to cause that ship to suffer 1 critical damage.',
  value: 3
}, {
  id: 57,
  name: 'Rebel Captive',
  type: 'crew',
  unique: true,
  restrictions: 'Imperial only.',
  text: 'Once per round, the first ship that declares you as the target of an attack immediately receives 1 stress token.',
  value: 3
}, {
  id: 58,
  name: 'Navigator',
  type: 'crew',
  unique: false,
  text: 'When you reveal a maneuver, you may rotate your dial to another maneuver with the same bearing.',
  text2: 'You cannot rotate to a red maneuver if you have any stress tokens.',
  value: 3
}, {
  id: 59,
  name: 'Flight Instructor',
  type: 'crew',
  unique: false,
  text: 'When defending, you may reroll one of your __focus__ results. If the attacker\'s pilot skill is "2" or lower, you may reroll 1 of your blank results instead.',
  value: 4
}, {
  id: 60,
  name: 'Carlist Rieekan',
  type: 'crew',
  unique: true,
  restrictions: 'Huge Ship only. Rebel only.',
  text: 'At the start of the Activation phase, you may discard this card to treat each friendly ship\'s pilot skill as "12" until the end of the phase.',
  value: 3
}, {
  id: 61,
  name: 'Jan Dodonna',
  type: 'crew',
  unique: true,
  restrictions: 'Huge Ship only. Rebel only.',
  text: 'When another friendly ship at Range 1 is attacking, it may change 1 of its __hit__ results to a __crit__ result.',
  value: 6
}, {
  id: 62,
  name: 'Toryn Farr',
  type: 'crew',
  unique: true,
  restrictions: 'Huge Ship only. Rebel only.',
  action: 'Spend any amount of energy to choose that many enemy ships at Range 1-2. Remove all focus, evade, and blue target lock tokens from those ships.',
  value: 6
}, {
  id: 63,
  name: 'WED-15 Repair Droid',
  type: 'crew',
  unique: false,
  restrictions: 'Huge Ship only.',
  action: 'Spend 1 energy to discard 1 of your facedown Damage cards, or spend 3 energy to discard 1 of your faceup Damage cards.',
  value: 2
}, {
  id: 64,
  name: 'C-3PO',
  type: 'crew',
  unique: true,
  restrictions: 'Rebel only.',
  text: 'Once per round, before you roll 1 or more defense dice, you may guess aloud a number of __evade__ results. If you roll that many __evade__ results (before modifying dice), add 1 __evade__ result.',
  value: 3
}, {
  id: 65,
  name: 'Han Solo',
  type: 'crew',
  unique: true,
  restrictions: 'Rebel only.',
  text: 'When attacking, if you have a target lock on the defender, you may spend that target lock to change all of your __focus__ results to __hit__ results.',
  value: 2
}, {
  id: 66,
  name: 'Leia Organa',
  type: 'crew',
  unique: true,
  restrictions: 'Rebel only.',
  text: 'At the start of the Activation phase, you may discard this card to allow all friendly ships that reveal a red maneuver to treat that maneuver as a white maneuver until the end of the phase.',
  value: 4
}, {
  id: 67,
  name: 'R2-D2',
  type: 'crew',
  unique: true,
  restrictions: 'Rebel only.',
  text: 'At the end of the End phase, if you have no shields, you may recover 1 shield and roll 1 attack die. On a __hit__ result, randomly flip 1 of your facedown Damage cards faceup and resolve it.',
  value: 4
}, {
  id: 68,
  name: 'Raymus Antilles',
  type: 'crew',
  unique: true,
  restrictions: 'Huge Ship only. Rebel only.',
  text: 'At the start of the Activation phase, choose 1 enemy ship at Range 1-3. You may look at that ship\'s chosen maneuver. If the maneuver is white, assign that ship 1 stress token.',
  value: 6
}, {
  id: 69,
  name: 'Targeting Coordinator',
  type: 'crew',
  unique: false,
  limited: true,
  energy: 'You may spend 1 energy to choose 1 friendly ship at Range 1-2. Acquire a target lock, then assign the blue target lock token to the chosen ship.',
  value: 6
}, {
  id: 70,
  name: 'Tactician',
  type: 'crew',
  unique: false,
  limited: true,
  energy: 'After you perform an attack against a ship inside your firing arc at Range 2, that ship receives 1 stress token.',
  value: 2
}, {
  id: 71,
  name: 'Jan Ors',
  type: 'crew',
  unique: true,
  restrictions: 'Rebel only',
  text: 'Once per round, when a friendly ship at Range 1-3 performs a focus action or would be assigned a focus token, you may assign that ship an evade token instead.',
  value: 2
}, {
  id: 72,
  name: 'Kyle Katarn',
  type: 'crew',
  unique: true,
  restrictions: 'Rebel only',
  text: 'After you remove a stress from your ship, you may assign a focus token to your ship.',
  value: 3
}, {
  id: 73,
  name: 'Lando Calrissian',
  type: 'crew',
  unique: true,
  restrictions: 'Rebel only',
  action: 'Roll 2 defense dice. For each __focus__ result, assign 1 focus token to your ship. For each __evade__ result, assign 1 evade token to your ship.',
  value: 3
}, {
  id: 74,
  name: 'Dash Rendar',
  type: 'crew',
  unique: true,
  restrictions: 'Rebel only',
  text: 'You may perform attacks while overlapping an obstacle.',
  text2: 'Your attacks cannot be obstructed.',
  value: 2
}]
export default crew.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
