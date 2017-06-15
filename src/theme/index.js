import { getMuiTheme } from 'material-ui/styles'

const blue         = '#3273c5'
const lightBlue    = '#529cf9'
const green        = '#419a5a'
const orange       = '#e15021'
const white        = '#eeeeee'
const gray         = '#282727'
const darkGray     = '#151515'
const lightOrange  = '#d2872c'
const yellow       = '#edec51'

const theme_props = {
  fontFamily: 'Abel, sans-serif',
  palette: {
    textColor: white,
    primary1Color: darkGray,
    primary2Color: blue,
    accent1Color: darkGray,
    accent2Color: lightOrange,
    accent3Color: yellow,
    canvasColor: gray
  },
  appBar: {
    height: 60,
    color: gray,
    textColor: white
  },
  raisedButton: {
    color: darkGray,
    textColor: yellow,
    primaryTextColor: lightBlue,
    secondaryTextColor: orange
  }
}

export default getMuiTheme(theme_props)
