import React from 'react'
import './Pilot.css'

const Art = props => (
  <div className="art">Art</div>
)

const Header = ({skill, title, ship}) => (
  <header>
    <div className="skill">{skill}</div>
    <div className="title-ship">
      <div className="title">{title}</div>
      <div className="ship">{ship}</div>
    </div>
    <div className="faction">Faction</div>
  </header>
)

const StatBox = ({stat, value}) => (
  <div className={`${stat} box`}>
    <div className="icon">Icon</div>
    <div className="value">{value}</div>
  </div>
)

const Stats = ({agility, damage, hull, shield}) => (
  <div className="stats">
    <StatBox stat="damage" value={damage} />
    <StatBox stat="agility" value={agility} />
    <StatBox stat="hull" value={hull} />
    <StatBox stat="shield" value={shield} />
  </div>
)

const Description = ({text}) => (
  <div className="description">
    {text}
  </div>
)

const Detail = props => (
  <div className="detail">
    <Stats {...props} />
    <Description text={props.description} />
  </div>
)

const Ship = props => (
  <div className="ship">
    Ship
  </div>
)

const Tray = props => (
  <div className="tray">
    <div className="icon">Icon</div>
    <div className="icon">Icon</div>
    <div className="icon">Icon</div>
  </div>
)

const Mods = props => (
  <div className="mods">
    <Ship />
    <Tray />
    <div className="value">Value</div>
  </div>
)

const PilotCard = ({pilot}) => (
  <div className="pilot-card">
    <Art {...pilot} />
    <Header {...pilot} />
    <Detail {...pilot} />
    <Mods {...pilot} />
  </div>
)

export default PilotCard
