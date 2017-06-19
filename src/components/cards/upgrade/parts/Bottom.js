import React from 'react'
import PropTypes from 'prop-types'
import './Bottom.css'

const propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

const Bottom = ({type, value}) => (
  <div className="bottom">
    <div className="icon">
      <i className={`xwing-miniatures-font xwing-miniatures-font-${type}`}></i>
    </div>
    <div className="value">{value}</div>
  </div>
)

Bottom.propTypes = propTypes

export default Bottom
