import React from "react";

export default element => ({ modifiers, className, ...props }) => {
  if (modifiers) {
    const modifiedClassName =
      className + " " + modifiers.map(m => m(props)).join(" ");
    return React.createElement(element, {
      className: modifiedClassName,
      ...props
    });
  }
  return React.createElement(element, { className, ...props });
};
