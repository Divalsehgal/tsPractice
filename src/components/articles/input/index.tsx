import React, { ChangeEvent } from "react";
import CustomInput from "../html/Input";

function index() {
  const handleChange = (event: ChangeEvent) => {
    console.log("handleChange", event);
  };
  return (
    <div>
      <CustomInput value={"dival"} onChange={handleChange} />
    </div>
  );
}

export default index;
