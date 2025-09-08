import React from "react";

type GridBoxProps = Readonly<{
  children?: React.ReactNode;
}>;

function GridBox({ children }: GridBoxProps) {
  return <div className="grid-item">{children}</div>;
}

export default GridBox;
