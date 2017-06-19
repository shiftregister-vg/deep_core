import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  text: PropTypes.string.isRequired
}

const Action = ({text}) => text && text.length ? (
  <div className="action"><strong>Action:</strong> {text}</div>
) : null

Action.propTypes = propTypes

export default Action
