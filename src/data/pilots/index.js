import imperial_pilots from './empire'
import rebel_pilots from './rebels'
import scum_pilots from './scum'

const pilots = []
  .concat(rebel_pilots)
  .concat(imperial_pilots)
  .concat(scum_pilots)

export default pilots
export {
  imperial_pilots,
  rebel_pilots,
  scum_pilots
}
