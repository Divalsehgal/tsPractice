import React, { useEffect, useRef } from 'react'
import CustomInput from '../html/Input';

function Domref() {
    const ref=useRef<HTMLInputElement>(null);
    useEffect(()=>{
        ref?.current?.focus()
    },[])
  return (
    <div>
      <CustomInput type="text" ref={ref} />
    </div>
  );
}

export default Domref
