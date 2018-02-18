import React, { Component } from "react";

import Calendar from "components/Calendar";
import { getMonthsFrom, getToday } from "components/utils/MomentHelpers";
import {
  todayModifier,
  selectedModifier,
  emptyModifier,
  weekendModifier
} from "components/utils/Modifiers";

class BasicCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monthMoments: getMonthsFrom(getToday(), 1),
      selectedDay: null
    };
  }

  render() {
    const { monthMoments, selectedDay } = this.state;
    console.log(selectedDay && selectedDay.format("Do"));
    const modifiers = [
      todayModifier,
      selectedModifier(selectedDay),
      emptyModifier,
      weekendModifier
    ];

    return (
      <Calendar
        monthGridProps={{
          monthMoments
        }}
        dayProps={{
          modifiers,
          onClick: (_, { dayMoment }) =>
            this.setState({ selectedDay: dayMoment })
        }}
      />
    );
  }
}

export default BasicCalendar;
