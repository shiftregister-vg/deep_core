import React from 'react'
import PropTypes from 'prop-types'
import './Art.css'

const propTypes = {
  image: PropTypes.string
}

const Art = ({ image }) => <div className="art"></div>

Art.propTypes = propTypes

export default Art
