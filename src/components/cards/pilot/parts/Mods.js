import React from 'react'

const Mods = ({mods, ship, value}) => (
  <div className="mods">
    <div className="ship">
      <i className={`xwing-miniatures-ship xwing-miniatures-ship-${ship.icon}`}></i>
    </div>

    <div className="tray">
      {mods.map((mod, i) => (
        <div className="icon" key={i}>
          <i className={`xwing-miniatures-font xwing-miniatures-font-${mod}`}></i>
        </div>
      ))}
    </div>

    <div className="value">{value}</div>
  </div>
)

export default Mods
