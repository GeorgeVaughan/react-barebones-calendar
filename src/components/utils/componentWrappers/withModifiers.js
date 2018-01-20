import React from "react";
import { combineClasses } from "components/utils/PropHelpers";

export default element => ({ modifiers, className, ...props }) => {
  if (modifiers) {
    const modifiedClassName = combineClasses(
      className,
      ...modifiers.map(m => m(props))
    );
    return React.createElement(element, {
      className: modifiedClassName,
      ...props
    });
  }
  return React.createElement(element, { className, ...props });
};
