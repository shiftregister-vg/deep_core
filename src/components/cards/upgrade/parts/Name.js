import React from 'react'
import PropTypes from 'prop-types'
import DynamicFont from 'react-dynamic-font'
import './Name.css'

const propTypes = {
  text: PropTypes.string.isRequired
}

const Name = ({text, unique}) => (
  <div className="name">
    <DynamicFont content={`${unique ? '•' : ''}${text}`} />
  </div>
)

Name.propTypes = propTypes

export default Name
