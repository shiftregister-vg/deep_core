import React from 'react'
import PropTypes from 'prop-types'
import DynamicFont from 'react-dynamic-font'
import './Name.css'

const propTypes = {
  text: PropTypes.string.isRequired
}

const Name = ({damage, text, unique}) => (
  <div className={`name ${damage ? 'damage' : ''}`}>
    <div className="text">
      <DynamicFont smooth content={`${unique ? '•' : ''}${text}`} />
    </div>
    {damage ? (
      <div className="value">
        <DynamicFont smooth content={damage} />
      </div>
    ) : null}
  </div>
)

Name.propTypes = propTypes

export default Name
