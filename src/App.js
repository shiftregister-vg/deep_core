import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import {
  AppBar,
  MuiThemeProvider
} from 'material-ui'
import {
  HomePage,
  PilotSheetPage
} from './pages'
import './App.css'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Modern X-wing Squad Builder"
            style={{position: 'fixed'}} />
          <div className="app">
            <Route exact path="/" component={HomePage} />
            <Route path="/pilot-sheet" component={PilotSheetPage} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
