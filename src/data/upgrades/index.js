import astromech from './astromech'
import bomb from './bomb'
import cannon from './cannon'
import cargo from './cargo'
import crew from './crew'
import elite from './elite'
import hardpoint from './hardpoint'
import illicit from './illicit'
import missile from './missile'
import salvaged_astromech from './salvaged_astromech'
import system from './system'
import team from './team'
import tech from './tech'
import torpedo from './torpedo'
import turret from './turret'

const combined = []
  .concat(astromech)
  .concat(bomb)
  .concat(cannon)
  .concat(cargo)
  .concat(crew)
  .concat(elite)
  .concat(hardpoint)
  .concat(illicit)
  .concat(missile)
  .concat(salvaged_astromech)
  .concat(system)
  .concat(team)
  .concat(tech)
  .concat(torpedo)
  .concat(turret)

const upgrades = {
  astromech,
  bomb,
  cannon,
  cargo,
  crew,
  elite,
  hardpoint,
  illicit,
  missile,
  salvaged_astromech,
  system,
  team,
  tech,
  torpedo,
  turret
}

export default upgrades
export {
  combined,
  astromech,
  bomb,
  cannon,
  cargo,
  crew,
  elite,
  hardpoint,
  illicit,
  missile,
  salvaged_astromech,
  system,
  team,
  tech,
  torpedo,
  turret
}
