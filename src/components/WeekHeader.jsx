import React from "react";

import { DAYS_OF_THE_WEEK } from "components/utils/Constants";
import { reorderArray } from "components/utils/ArrayHelpers";
import defaultComponent from "components/utils/defaultComponent";

const WeekHeader = ({ className, weekdays, firstDayOfTheWeek, ...props }) => (
  <div className={"calendar-weekday-header-row " + className} {...props}>
    {reorderArray(weekdays, firstDayOfTheWeek).map((day, i) => (
      <span key={i} className="calendar-weekday-header">
        {day}
      </span>
    ))}
  </div>
);

WeekHeader.defaultProps = {
  weekdays: DAYS_OF_THE_WEEK.map(day => day.substring(0, 2)),
  firstDayOfTheWeek: 0
};

export default defaultComponent(WeekHeader);
