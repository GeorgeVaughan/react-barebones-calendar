import React from "react";

import defaultComponent from "components/utils/defaultComponent";

const MonthTitle = ({ className, monthMoment, ...props }) => (
  <div className={"calendar-month-title " + className} {...props}>
    {monthMoment.format("MMMM YYYY")}
  </div>
);

export default defaultComponent(MonthTitle);
