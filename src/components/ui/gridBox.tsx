import React from "react";

function GridBox({children}:React.PropsWithChildren<{}>) {
  return <div className="grid-item">{children}</div>;
}

export default GridBox;
