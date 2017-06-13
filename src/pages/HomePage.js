import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { RaisedButton } from 'material-ui'
import './HomePage.css'

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <h2>This is a work in progress</h2>
        <p>As a way to better learn the available options for X-wing Miniatures I decided to build another X-wing squad builder.  Yes, I know there are plenty out there.  This is not an attempt to replace those.</p>
        <p>While you're here, check out the <Link to="/pilot-sheet">
          <RaisedButton label="Pilot Card sheet" />
        </Link> and <a href="https://github.com/stevegood/mxwsb/issues" target="_blank" rel="noopener noreferrer">
          <RaisedButton label="let me know what I left out" />
        </a>.</p>
      </div>
    )
  }
}

export default HomePage
