import React from "react";

export default element => ({ overrideRender, ...props }) => {
  if (overrideRender) return overrideRender(props);
  return React.createElement(element, props);
};
