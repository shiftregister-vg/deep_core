import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  image: PropTypes.string
}

const Art = ({ image }) => <div className="art"></div>

Art.propTypes = propTypes

export default Art
