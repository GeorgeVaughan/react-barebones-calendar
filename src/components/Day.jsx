import React from "react";

import defaultComponent from "components/utils/componentWrappers/defaultComponent";

const Day = ({ dayMoment, ...props }) => (
  <div {...props}>
    <div>{dayMoment ? dayMoment.format("D") : ""}</div>
  </div>
);

export default defaultComponent(Day, "calendar-day");
