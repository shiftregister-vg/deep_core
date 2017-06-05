import React from 'react'

const Art = ({image, faction}) => (
  <div className="art" style={{
    backgroundImage: `url("/art/card/pilot/${faction}/${image}")`
  }}></div>
)

export default Art
