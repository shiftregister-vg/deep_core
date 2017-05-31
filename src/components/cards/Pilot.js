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
    <div className="faction">F</div>
  </header>
)

const StatBox = ({stat, value}) => (
  <div className={`${stat} box`}>
    <div className="icon">{stat}</div>
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

const Action = (props) => (
  <div className="action">A</div>
)

const Actions = ({actions}) => (
  <div className="actions">
    {actions.map(action => (
      <Action />
    ))}
  </div>
)

const Description = ({text}) => (
  <div className="description">
    <p>{text}</p>
  </div>
)

const DescriptionActions = ({actions, description}) => (
  <div className="description-actions">
    <Description text={description} />
    <Actions actions={actions} />
  </div>
)

const Detail = props => (
  <div className="detail">
    <Stats {...props} />
    <DescriptionActions {...props} />
  </div>
)

const Ship = props => (
  <div className="ship">S</div>
)

const Tray = ({mods}) => (
  <div className="tray">
    {mods.map(mod => (
      <div className="icon">M</div>
    ))}
  </div>
)

const Mods = ({mods, value}) => (
  <div className="mods">
    <Ship />
    <Tray mods={mods} />
    <div className="value">{value}</div>
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
