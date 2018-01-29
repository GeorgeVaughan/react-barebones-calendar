import React from "react";

import MonthGrid from "components/MonthGrid";
import NavButtons from "components/NavButtons";

import {
  combineWrappers,
  withClassName,
  withRenderOverride
} from "components/utils/ComponentWrappers";

const Calendar = ({
  navButtonProps,
  monthGridProps,
  monthProps,
  monthTitleProps,
  weekHeaderProps,
  weekProps,
  dayProps,
  children,
  ...props
}) => (
  <div {...props}>
    <NavButtons {...navButtonProps} />
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
