import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  RaisedButton
} from 'material-ui'
import './HomePage.css'

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Card>
          <CardHeader title="This is a work in progress" />
          <CardText>
            As a way to better learn the available options for X-wing Miniatures I decided to build another X-wing squad builder.  Yes, I know there are plenty out there.  This is not an attempt to replace those.
          </CardText>
          <CardActions>
            <small>While you're here...</small>
            <Link to="/pilot-sheet">
              <RaisedButton label="Check out the pilot card sheet" primary />
            </Link>
            <a href="https://github.com/stevegood/deep_core/issues" target="_blank" rel="noopener noreferrer">
              <RaisedButton label="let me know what I left out" secondary />
            </a>
          </CardActions>
        </Card>

      </div>
    )
  }
}

export default HomePage
