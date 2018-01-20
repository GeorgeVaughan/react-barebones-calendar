import React from "react";

export default element => ({ renderOverride, ...props }) => {
  if (renderOverride) return renderOverride(props);
  return React.createElement(element, props);
};
