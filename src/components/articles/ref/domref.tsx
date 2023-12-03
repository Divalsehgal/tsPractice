import React, { useEffect, useRef } from 'react'

function Domref() {
    const ref=useRef<HTMLInputElement>(null);
    useEffect(()=>{
        ref?.current?.focus()
    },[])
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
}

export default Domref
