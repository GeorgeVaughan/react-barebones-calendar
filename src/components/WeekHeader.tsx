import React from "react";

import { DAYS_OF_THE_WEEK } from "components/utils/Constants";
import { reorderArray } from "components/utils/ArrayHelpers";
import { asDefaultComponent } from "components/utils/ComponentWrappers";

const WeekHeader = ({ weekdays, firstDayOfTheWeek, ...props }) => (
  <div {...props}>
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

export default asDefaultComponent(WeekHeader, "calendar-weekday-header-row");
