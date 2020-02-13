import * as React from 'react'

const textAreaStyle = {
  width: '100%',
  minHeight: '500px',
  padding: "20px",
  background: "#eeeeee",
}

const Textarea = () => {
  return (
    <textarea style={textAreaStyle} name="textarea" id="textarea"></textarea>
  )
}

export {Textarea}