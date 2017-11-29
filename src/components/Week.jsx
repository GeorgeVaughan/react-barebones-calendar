import React from "react";

import Day from "./Day";

import defaultComponent from "components/utils/defaultComponent";

const Week = ({ className, dayMoments, dayProps, ...props }) => (
  <div className={"calendar-week " + className} {...props}>
    {dayMoments.map((dayMoment, i) => (
      <Day key={i} dayMoment={dayMoment} {...dayProps} />
    ))}
  </div>
);

export default defaultComponent(Week);
