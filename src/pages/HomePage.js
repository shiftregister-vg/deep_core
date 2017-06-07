import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <h1>Modern X-Wing Squad Builder</h1>
        <h3>This is a work in progress</h3>
        <p>As a way to better learn the available options for X-Wing Miniatures I decided to build another X-Wing squad builder.  Yes, I know there are plenty out there.  This is not an attempt to replace those.</p>
        <p>While you're here, check out the <Link to="/pilot-sheet">Pilot Card sheet</Link> and <a href="https://github.com/stevegood/mxwsb/issues" target="_blank">let me know what I left out</a>.</p>
      </div>
    )
  }
}

export default HomePage
