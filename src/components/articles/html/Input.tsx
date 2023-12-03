import React from 'react'
type inputProps = React.ComponentProps<"input">;
function CustomInput(props:inputProps) {
  return (
    <input  {...props}/>
  )
}

export default CustomInput
