import React, { Component } from "react";
import moment from "moment";

import Calendar from "components/Calendar";
import { getMonthsFrom } from "components/utils/MomentHelpers";
import { emptyModifier, weekendModifier } from "components/utils/Modifiers";

import "styles/largeStyle.css";

class LargeCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monthMoments: getMonthsFrom(moment(), 1)
    };
  }
  render() {
    const { monthMoments } = this.state;
    return (
      <Calendar
        className="calendar-large"
        monthGridProps={{
          monthMoments
        }}
        dayProps={{
          modifiers: [emptyModifier, weekendModifier]
        }}
      />
    );
  }
}

export default LargeCalendar;
