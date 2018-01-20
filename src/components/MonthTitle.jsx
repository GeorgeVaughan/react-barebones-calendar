import React from "react";

import { asDefaultComponent } from "components/utils/ComponentWrappers";

const MonthTitle = ({ monthMoment, ...props }) => (
  <div {...props}>{monthMoment.format("MMMM YYYY")}</div>
);

export default asDefaultComponent(MonthTitle, "calendar-month-title");
