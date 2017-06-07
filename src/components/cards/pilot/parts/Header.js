import React from 'react'
import DynamicFont from 'react-dynamic-font'

const Header = ({faction, name, ship, skill, unique}) => (
  <header>
    <div className="skill">{skill}</div>

    <div className="name-ship">
      <div className="name">
        <DynamicFont content={`${unique ? '•' : ''}${name}`} />
      </div>
      <div className="ship">
        <DynamicFont content={ship.name} />
      </div>
    </div>

    <div className="faction">
      <i className={`xwing-miniatures-font xwing-miniatures-font-${faction}`}></i>
    </div>
  </header>
)

export default Header
