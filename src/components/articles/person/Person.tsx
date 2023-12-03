import React from "react";
import { personProps } from "../../Person.types";

export function Person(props: personProps) {
  return <div>{`${props.name.firstName}${props.name.lastName}`}</div>;
}

