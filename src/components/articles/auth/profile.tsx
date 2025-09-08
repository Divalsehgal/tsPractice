import React from "react";
export type profileProps = {
  name: string;
};
export function Profile({ name }: Readonly<profileProps>) {
  return <div>private Profile component{name}</div>;
}
