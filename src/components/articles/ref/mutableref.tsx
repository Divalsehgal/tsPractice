import React, { useEffect, useRef, useState } from 'react'

function Mutableref() {
    const [timer,setTimer]=useState(0)
    const ref=useRef<number|null>(null);
    const stopTimerHandler=()=>{
      setTimer(0);
      if(ref.current){
        window.clearInterval(ref.current);
      }

  }
    useEffect(()=>{ 
       ref.current=window.setInterval(()=>{
        setTimer((timer)=>timer+1)
      },1000)
      return ()=>{
        stopTimerHandler()
      }
    },[])
  return (
    <div>timer:
      {timer}
      <button onClick={stopTimerHandler}>Stop timer</button>
    </div>
  ) 
}
 
export default Mutableref
