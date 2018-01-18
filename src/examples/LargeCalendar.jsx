import React, { Component } from "react";
import moment from "moment";

import Calendar from "components/Calendar";
import { getMonthsFrom } from "components/utils/MomentHelpers";
import {
  selectedModifier,
  emptyModifier,
  weekendModifier
} from "components/utils/Modifiers";

import "styles/largeStyle.css";

class LargeCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monthMoments: getMonthsFrom(moment(), 1),
      selectedDay: moment()
    };
  }
  render() {
    const { monthMoments, selectedDay } = this.state;
    return (
      <Calendar
        className="calendar-large"
        monthGridProps={{
          monthMoments
        }}
        dayProps={{
          modifiers: [
            selectedModifier(selectedDay),
            emptyModifier,
            weekendModifier
          ],
          onClick: (_, { dayMoment }) =>
            this.setState({ selectedDay: dayMoment })
        }}
      />
    );
  }
}

export default LargeCalendar;
