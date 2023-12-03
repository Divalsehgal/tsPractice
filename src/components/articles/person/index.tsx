import React from "react";
import { Person } from "./Person";

function index() {
  const name = {
    firstName: "Dival",
    lastName: "Sehgal",
  };
  return (
    <div>
      <Person name={name} />
    </div>
  );
}

export default index;
