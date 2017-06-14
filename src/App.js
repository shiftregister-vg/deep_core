import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import {
  AppBar,
  MuiThemeProvider
} from 'material-ui'
import muiTheme from './theme'
import {
  HomePage,
  PilotSheetPage
} from './pages'
import './App.css'

class App extends Component {
  handleTitleTouchTap = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app">
          <AppBar
            title={<span className="title">Modern X-wing Squad Builder</span>}
            onTitleTouchTap={this.handleTitleTouchTap}
            style={{position: 'fixed'}} />

          <div className="background-styles">
            <div className="bg_stars_left" />
            <div className="bg_stars_right" />
          </div>

          <div className="app-content">
            <Route exact path="/" component={HomePage} />
            <Route path="/pilot-sheet" component={PilotSheetPage} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
