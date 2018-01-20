import React from "react";

import { asDefaultComponent } from "components/utils/ComponentWrappers";

const Day = ({ dayMoment, ...props }) => (
  <div {...props}>
    <div className="calendar-date">
      {dayMoment ? dayMoment.format("D") : ""}
    </div>
  </div>
);

export default asDefaultComponent(Day, "calendar-day");
