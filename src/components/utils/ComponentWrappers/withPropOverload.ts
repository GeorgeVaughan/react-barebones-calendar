import React from "react";

const overloadFunc = (func, props) => {
  if (!func) return func;
  return (...params) => func(...params, props);
};

export default element => ({
  onClick,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  ...props
}) =>
  React.createElement(element, {
    onClick: overloadFunc(onClick, props),
    onMouseEnter: overloadFunc(onMouseEnter, props),
    onMouseMove: overloadFunc(onMouseMove, props),
    onMouseLeave: overloadFunc(onMouseLeave, props),
    ...props
  });
