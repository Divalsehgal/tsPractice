type toastProps=Readonly<{
    position:Exclude <`${horizontalPosition}-${verticalPosition}`,'center-center'>|'center'
}>

type horizontalPosition='left'|'right'|'center'

type verticalPosition='top'|'bottom'|'center'

export function Toast({position}:toastProps) {
  return (
    <div>
      Toast notification : {position}
    </div>
  )
}

