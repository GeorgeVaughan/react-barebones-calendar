import React from "react";

import WeekHeader from "components/WeekHeader";
import MonthGrid from "components/MonthGrid";

import {
  combineWrappers,
  withClassName,
  withRenderOverride
} from "components/utils/ComponentWrappers";

const Calendar = ({
  weekHeaderProps,
  monthGridProps,
  monthProps,
  monthTitleProps,
  weekProps,
  dayProps,
  ...props
}) => (
  <div {...props}>
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

export default combineWrappers(withClassName("calendar"), withRenderOverride)(
  Calendar
);
