import React from 'react'
import PropTypes from 'prop-types'
import Action from './Action'
import { processTextForIcons } from '../../../../util'
import './TextWrapper.css'

const propTypes = {
  text: PropTypes.string,
  text2: PropTypes.string
}

const TextWrapper = ({action, text, text2}) => (
  <div className="text-wrapper">
    {action ? <Action text={action} /> : null}
    <div className="text"
      dangerouslySetInnerHTML={{__html: processTextForIcons(text)}} />
    <div className="text text-2"
      dangerouslySetInnerHTML={{__html: processTextForIcons(text2)}} />
  </div>
)

TextWrapper.propTypes = propTypes

export default TextWrapper
