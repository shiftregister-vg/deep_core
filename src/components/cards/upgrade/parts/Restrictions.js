import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  text: PropTypes.string.isRequired
}

const Restrictions = ({ text }) => (
  <div className="restrictions">
    <em>{text}</em>
  </div>
)

Restrictions.propTypes = propTypes

export default Restrictions
