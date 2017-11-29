import React from "react";

import Month from "./Month";

import overridable from "components/utils/overrideable";

const MonthGrid = ({
  className,
  monthMoments,
  monthProps,
  monthTitleProps,
  weekProps,
  dayProps,
  ...props
}) => (
  <div className={"calendar-month-grid " + className} {...props}>
    {monthMoments.map((monthMoment, i) => (
      <Month
        key={monthMoment.format("MMYYYY")}
        monthMoment={monthMoment}
        {...monthProps}
        monthTitleProps={monthTitleProps}
        weekProps={weekProps}
        dayProps={dayProps}
      />
    ))}
  </div>
);

export default overridable(MonthGrid);
