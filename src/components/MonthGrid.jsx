import React from "react";

import Month from "./Month";

import combineWrappers from "components/utils/componentWrappers/combineWrappers";
import withClassName from "components/utils/componentWrappers/withClassName";
import withRenderOverride from "components/utils/componentWrappers/withRenderOverride";

const MonthGrid = ({
  monthMoments,
  monthProps,
  monthTitleProps,
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
