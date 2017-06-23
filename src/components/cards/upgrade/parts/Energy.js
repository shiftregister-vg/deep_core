import React from 'react'
import PropTypes from 'prop-types'
import './Energy.css'

const propTypes = {
  text: PropTypes.string.isRequired
}

const Energy = ({text}) => text && text.length ? (
  <div className="energy"><strong>Energy:</strong> {text}</div>
) : null

Energy.propTypes = propTypes

export default Energy
