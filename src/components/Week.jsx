import React from "react";

import Day from "./Day";

import defaultComponent from "components/utils/componentWrappers/defaultComponent";

const Week = ({ dayMoments, dayProps, ...props }) => (
  <div {...props}>
    {dayMoments.map((dayMoment, i) => (
      <Day key={i} dayMoment={dayMoment} {...dayProps} />
    ))}
  </div>
);

export default defaultComponent(Week, "calendar-week");
