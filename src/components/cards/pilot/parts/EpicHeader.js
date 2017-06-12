import React from 'react'
import './EpicHeader.css'

const EpicHeader = ({faction, name, ship, skill}) => (
  <header className="epic">
    <div className="skill">{skill}</div>

    <div className="name-ship">
      <div className="ship">{ship.name}</div>

      <div className="icon">
        <i className="xwing-miniatures-font xwing-miniatures-font-epic"></i>
      </div>
    </div>

    <div className="faction">
      <i className={`xwing-miniatures-font xwing-miniatures-font-${faction}`}></i>
    </div>
  </header>
)

export default EpicHeader
