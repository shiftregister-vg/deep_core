import React from 'react'

const Header = ({faction, name, ship, skill, unique}) => (
  <header>
    <div className="skill">{skill}</div>

    <div className="name-ship">
      <div className="name">{unique ? '•' : ''}{name}</div>
      <div className="ship">{ship.name}</div>
    </div>

    <div className="faction">
      <i className={`xwing-miniatures-font xwing-miniatures-font-${faction}`}></i>
    </div>
  </header>
)

export default Header
