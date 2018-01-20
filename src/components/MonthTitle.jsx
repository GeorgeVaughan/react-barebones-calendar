import React from "react";

import defaultComponent from "components/utils/componentWrappers/defaultComponent";

const MonthTitle = ({ monthMoment, ...props }) => (
  <div {...props}>{monthMoment.format("MMMM YYYY")}</div>
);

export default defaultComponent(MonthTitle, "calendar-month-title");
