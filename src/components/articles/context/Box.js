import React, { useContext } from "react";
import { context } from "./ThemeContext";

function Box() {
  const values = useContext(context);
  const { primary, secondary } = values;
  return (
    <div style={{ backgroundColor: primary.bgcolor, color: secondary.main }}>
      <h1> theme context</h1>
    </div>
  );
}

export default Box;
