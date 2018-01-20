import React, { Component } from "react";

import MonthTitle from "./MonthTitle";
import WeekHeader from "components/WeekHeader";
import Week from "./Week";

import { asDefaultComponent } from "components/utils/ComponentWrappers";
import { getDaysInMonth2D, isSameMonth } from "components/utils/MomentHelpers";

class Month extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weeks: getDaysInMonth2D(props.monthMoment, props.firstDayOfTheWeek)
    };
  }
  componentWillReceiveProps(nextProps) {
    if (!isSameMonth(this.props.monthMoment, nextProps.monthMoment)) {
      this.setState({
        weeks: getDaysInMonth2D(
          nextProps.monthMoment,
          nextProps.firstDayOfTheWeek
        )
      });
    }
  }
  render() {
    const {
      monthMoment,
      monthTitleProps,
      weekHeaderProps,
      weekProps,
      dayProps,
      firstDayOfTheWeek,
      ...props
    } = this.props;
    const { weeks } = this.state;

    return (
      <div {...props}>
        <MonthTitle monthMoment={monthMoment} {...monthTitleProps} />
        <WeekHeader {...weekHeaderProps} />
        {weeks.map((dayMoments, i) => (
          <Week
            key={i}
            dayMoments={dayMoments}
            {...weekProps}
            dayProps={dayProps}
          />
        ))}
      </div>
    );
  }
}

Month.defaultProps = {
  firstDayOfTheWeek: 0
};

export default asDefaultComponent(Month, "calendar-month");
