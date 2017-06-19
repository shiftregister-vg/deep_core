import React from 'react'
import Art from './parts/Art'
import Bottom from './parts/Bottom'
import Name from './parts/Name'
import TextWrapper from './parts/TextWrapper'

import './Upgrade.css'

const UpgradeCard = (props) => (
  <div className="upgrade-card">
    <Art image={props.image} />
    <Name text={props.name} unique={props.unique} />
    <TextWrapper
      action={props.action}
      text={props.text}
      text2={props.text2} />
    <Bottom type={props.type} value={props.value} />
  </div>
)

export default UpgradeCard
