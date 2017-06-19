import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  text: PropTypes.string.isRequired
}

const Name = ({text}) => <div className="name">{text}</div>

Name.propTypes = propTypes

export default Name
