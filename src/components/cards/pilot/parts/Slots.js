import React from 'react'
import './Slots.css'

const Slots = ({slots, ship, value}) => (
  <div className="slots">
    <div className="ship">
      <i className={`xwing-miniatures-ship xwing-miniatures-ship-${ship.icon}`}></i>
    </div>

    <div className="tray">
      {slots.map((mod, i) => (
        <div className="icon" key={i}>
          <i className={`xwing-miniatures-font xwing-miniatures-font-${mod}`}></i>
        </div>
      ))}
    </div>

    <div className="value">{value}</div>
  </div>
)

export default Slots
