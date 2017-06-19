import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  text: PropTypes.string.isRequired
}

const Attack = ({ text }) => (
  <div className="attack">
    <strong>Attack:</strong> {text}
  </div>
)

Attack.propTypes = propTypes

export default Attack
