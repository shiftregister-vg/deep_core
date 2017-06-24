const crew = [{
  id: 47,
  name: 'Chewbacca',
  type: 'crew',
  unique: true,
  restrictions: 'Rebel only.',
  text: 'When you are dealt a Damage card, you may immediately discard that card and recover 1 shield.',
  text2: 'Then, discard this upgrade card.',
  value: 4
}]
export default crew.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
