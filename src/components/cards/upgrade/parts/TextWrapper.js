import React from 'react'
import PropTypes from 'prop-types'
import Action from './Action'
import Attack from './Attack'
import Energy from './Energy'
import Restrictions from './Restrictions'
import { processTextForIcons } from '../../../../util'
import './TextWrapper.css'

const propTypes = {
  text: PropTypes.string,
  text2: PropTypes.string
}

const TextWrapper = ({action, attack, energy, restrictions, text, text2}) => (
  <div className="text-wrapper">
    {restrictions ? <Restrictions text={restrictions} /> : null}
    {action ? <Action text={action} /> : null}
    {attack ? <Attack text={attack} /> : null}
    {energy ? <Energy text={energy} /> : null}
    <div className="text"
      dangerouslySetInnerHTML={{__html: processTextForIcons(text)}} />
    <div className="text text-2"
      dangerouslySetInnerHTML={{__html: processTextForIcons(text2)}} />
  </div>
)

TextWrapper.propTypes = propTypes

export default TextWrapper
