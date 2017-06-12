import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <h1>Modern X-wing Squad Builder</h1>
        <h3>This is a work in progress</h3>
        <p>As a way to better learn the available options for X-wing Miniatures I decided to build another X-wing squad builder.  Yes, I know there are plenty out there.  This is not an attempt to replace those.</p>
        <p>While you're here, check out the <Link to="/pilot-sheet">Pilot Card sheet</Link> and <a href="https://github.com/stevegood/mxwsb/issues" target="_blank" rel="noopener noreferrer">let me know what I left out</a>.</p>
      </div>
    )
  }
}

export default HomePage
