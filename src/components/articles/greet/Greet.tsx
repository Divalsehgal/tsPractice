import React from "react";
type GreetProps = {
  name: string;
  age: number;
  isLoggedIn?: boolean;
};
export function Greet(props: GreetProps) {
  if (props?.isLoggedIn) {
    return <h1>Hello {props.name}, Now you are logged in </h1>;
  }
  return (
    <div>
      Hello {props?.name} i am {props.age} years old
    </div>
  );
}

