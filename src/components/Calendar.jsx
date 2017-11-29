import React from "react";

import WeekHeader from "components/WeekHeader";
import MonthGrid from "components/MonthGrid";

import overridable from "components/utils/overrideable";

const Calendar = ({
  className,
  weekHeaderProps,
  monthGridProps,
  monthProps,
  monthTitleProps,
  weekProps,
  dayProps,
  ...props
}) => (
  <div className={"calendar " + className} {...props}>
    <WeekHeader {...weekHeaderProps} />
    <MonthGrid
      {...monthGridProps}
      monthProps={monthProps}
      monthTitleProps={monthTitleProps}
      weekProps={weekProps}
      dayProps={dayProps}
    />
  </div>
);

export default overridable(Calendar);
