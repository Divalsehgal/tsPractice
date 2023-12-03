import React, { ChangeEvent } from "react";
import {Input} from "./input"; 

function index() {
  const handleChange = (event: ChangeEvent) => {
    console.log("handleChange", event);
  };
  return (
    <div>
      <Input value={"dival"} handleChange={handleChange} />
    </div>
  );
}

export default index;
