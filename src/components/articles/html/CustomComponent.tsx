import React from 'react'
import Greet from '../greet/index'
// extracting props from some other component
function CustomComponent(props:React.ComponentProps<typeof Greet>) {
  return (
    <div>
      <Greet/>
    </div>
  )
}

export default CustomComponent
