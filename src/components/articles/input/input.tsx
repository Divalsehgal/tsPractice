import React from "react";
type inputProps ={
 
    value:string,

    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
}
export function Input({value,handleChange}:inputProps) { 
    const InputChangeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
       handleChange(event);
    }
  return <input value={value} onChange={InputChangeHandler}/>;
}


