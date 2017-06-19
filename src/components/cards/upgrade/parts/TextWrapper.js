import React from 'react'
import PropTypes from 'prop-types'
import { processTextForIcons } from '../../../../util'

const propTypes = {
  text: PropTypes.string,
  text2: PropTypes.string
}

const TextWrapper = ({text, text2}) => (
  <div className="text-wrapper">
    <div className="text"
      dangerouslySetInnerHTML={{__html: processTextForIcons(text)}} />
    <div className="text text-2"
      dangerouslySetInnerHTML={{__html: processTextForIcons(text2)}} />
  </div>
)

TextWrapper.propTypes = propTypes

export default TextWrapper
