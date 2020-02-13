
import * as React from 'react';

import Control from '../Control'

// 
const listStyle = { display: "flex", listStyle: "none", marginBottom: "2rem", padding: 0 }

const Controls = () => {
  return (
    <ul style={listStyle}>
      <Control />
      <Control />
      <Control />
      <Control />
      <Control />
      <Control />
    </ul>
  )
}

export { Controls }