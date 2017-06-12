import React from 'react'
import './Art.css'

const Art = ({image, faction}) => (
  <div className="art" style={{
    backgroundImage: `url("${process.env.PUBLIC_URL}/art/card/pilot/${faction}/${image}")`
  }}></div>
)

export default Art
