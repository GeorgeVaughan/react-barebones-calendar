import React from "react";

import Day from "./Day";

import { asDefaultComponent } from "components/utils/ComponentWrappers";

const Week = ({ dayMoments, dayProps, ...props }) => (
  <div {...props}>
    {dayMoments.map((dayMoment, i) => (
      <Day key={i} dayMoment={dayMoment} {...dayProps} />
    ))}
  </div>
);

export default asDefaultComponent(Week, "calendar-week");
