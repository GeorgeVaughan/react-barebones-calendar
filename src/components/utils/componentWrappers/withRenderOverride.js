import React from "react";

export default element => ({ renderOverride, ...props }) => {
  if (renderOverride)
    return renderOverride({ defaultRender: element, ...props });
  return React.createElement(element, props);
};
