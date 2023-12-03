import React from 'react'
type toastProps={
    position:Exclude <`${horizontalPosition}-${verticalPosition}`,'center-center'>|'center'
}

type horizontalPosition='left'|'right'|'center'

type verticalPosition='top'|'bottom'|'center'

export function Toast(props:toastProps) {
  return (
    <div>
      Toast notification : {props.position}
    </div>
  )
}

