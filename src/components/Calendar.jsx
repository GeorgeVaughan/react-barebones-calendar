import React from "react";

import MonthGrid from "components/MonthGrid";

import {
  combineWrappers,
  withClassName,
  withRenderOverride
} from "components/utils/ComponentWrappers";

const Calendar = ({
  monthGridProps,
  monthProps,
  monthTitleProps,
  weekHeaderProps,
  weekProps,
  dayProps,
  ...props
}) => (
  <div {...props}>
    <MonthGrid
      {...monthGridProps}
      monthProps={monthProps}
      monthTitleProps={monthTitleProps}
      weekHeaderProps={weekHeaderProps}
      weekProps={weekProps}
      dayProps={dayProps}
    />
  </div>
);

export default combineWrappers(withClassName("calendar"), withRenderOverride)(
  Calendar
);
