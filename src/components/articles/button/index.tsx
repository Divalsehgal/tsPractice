import React from "react";
import {Button} from "./button";

function index() {
  const handleClick = (event: React.MouseEvent, id: number) => {
    console.log("handleClick", event, id);
  };
  return (
    <div>
      <Button handleClick={handleClick} />
    </div>
  );
}

export default index;
