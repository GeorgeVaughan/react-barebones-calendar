import React from "react";

import { asDefaultComponent } from "components/utils/ComponentWrappers";

const Day = ({ dayMoment, ...props }) => (
  <div {...props}>
    <div>{dayMoment ? dayMoment.format("D") : ""}</div>
  </div>
);

export default asDefaultComponent(Day, "calendar-day");
