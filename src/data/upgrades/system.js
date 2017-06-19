const system = []
export default system.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
