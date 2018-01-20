import React from "react";
import { combineClasses } from "components/utils/PropHelpers";

export default newClassName => element => ({ className, ...props }) =>
  React.createElement(element, {
    className: combineClasses(newClassName, className),
    ...props
  });
