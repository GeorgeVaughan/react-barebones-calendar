import React from "react";

import Month from "./Month";

import {
  combineWrappers,
  withClassName,
  withRenderOverride
} from "components/utils/ComponentWrappers";

const MonthGrid = ({
  monthMoments,
  monthProps,
  monthTitleProps,
  weekHeaderProps,
  weekProps,
  dayProps,
  ...props
}) => (
  <div {...props}>
    {monthMoments.map((monthMoment, i) => (
      <Month
        key={monthMoment.format("MMYYYY")}
        monthMoment={monthMoment}
        {...monthProps}
        monthTitleProps={monthTitleProps}
        weekHeaderProps={weekHeaderProps}
        weekProps={weekProps}
        dayProps={dayProps}
      />
    ))}
  </div>
);

export default combineWrappers(
  withClassName("calendar-month-grid"),
  withRenderOverride
)(MonthGrid);
