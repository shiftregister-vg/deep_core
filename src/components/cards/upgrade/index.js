import React from 'react'
import Art from './parts/Art'
import Bottom from './parts/Bottom'
import Name from './parts/Name'
import TextWrapper from './parts/TextWrapper'

import './Upgrade.css'

const UpgradeCard = (props) => (
  <div className="upgrade-card">
    <Art image={props.image} />
    <Name
      damage={props.damage}
      text={props.name}
      unique={props.unique} />
    <div className="content-area">
      <TextWrapper
        action={props.action}
        attack={props.attack}
        energy={props.energy}
        restrictions={props.restrictions}
        text={props.text}
        text2={props.text2} />
      {props.range ? (
        <div className="range">
          <span>{props.range}</span>
        </div>
      ) : null}
    </div>
    <Bottom type={props.type} value={props.value} />
  </div>
)

export default UpgradeCard
