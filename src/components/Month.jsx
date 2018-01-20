import React, { Component } from "react";

import MonthTitle from "./MonthTitle";
import Week from "./Week";

import defaultComponent from "components/utils/componentWrappers/defaultComponent";
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
      weekProps,
      dayProps,
      firstDayOfTheWeek,
      ...props
    } = this.props;
    const { weeks } = this.state;

    return (
      <div {...props}>
        <MonthTitle monthMoment={monthMoment} {...monthTitleProps} />
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

export default defaultComponent(Month, "calendar-month");
