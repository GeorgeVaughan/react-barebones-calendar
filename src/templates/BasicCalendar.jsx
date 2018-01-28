import React, { Component } from "react";
import moment from "moment";

import Calendar from "components/Calendar";
import { getMonthsFrom } from "components/utils/MomentHelpers";
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
      monthMoments: getMonthsFrom(moment(), 1),
      selectedDay: moment()
    };
  }

  render() {
    const { monthMoments, selectedDay } = this.state;

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
