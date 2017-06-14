import { getMuiTheme } from 'material-ui/styles'

const blue    = '#3273c5'
const green   = '#419a5a'
const orange  = '#e15021'
const white   = '#eeeeee'
const gray    = '#282727'
const yellow  = '#d2872c'

const theme_props = {
  palette: {
    textColor: white,
    primary1Color: blue,
    primary2Color: green,
    accent1Color: orange,
    accent2Color: yellow,
    canvasColor: gray
  },
  appBar: {
    height: 60,
    color: gray,
    textColor: white
  },
  raisedButton: {
    color: white,
    textColor: gray
  }
}

export default getMuiTheme(theme_props)
