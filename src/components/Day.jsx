import React from "react";

import defaultComponent from "components/utils/defaultComponent";

const Day = ({ dayMoment, className, ...props }) => (
  <div className={"calendar-day " + className} {...props}>
    <div>{dayMoment ? dayMoment.format("D") : ""}</div>
  </div>
);

export default defaultComponent(Day);
