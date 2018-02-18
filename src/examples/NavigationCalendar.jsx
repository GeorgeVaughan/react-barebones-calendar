import React, { Component } from "react";

import Calendar from "components/Calendar";
import { getMonthsFrom, getToday } from "components/utils/MomentHelpers";
import {
  todayModifier,
  selectedModifier,
  emptyModifier,
  weekendModifier
} from "components/utils/Modifiers";

class NavigationCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startMonth: getToday(),
      selectedDay: null
    };
  }

  navigate = change => {
    const { startMonth } = this.state;

    this.setState({
      startMonth: startMonth.clone().add(change, "month")
    });
  };

  render() {
    const { startMonth, selectedDay } = this.state;

    const modifiers = [
      todayModifier,
      selectedModifier(selectedDay),
      emptyModifier,
      weekendModifier
    ];

    return (
      <div>
        <Calendar
          navButtonProps={{
            navigate: this.navigate
          }}
          monthGridProps={{
            monthMoments: getMonthsFrom(startMonth, 1)
          }}
          dayProps={{
            modifiers,
            onClick: (_, { dayMoment }) =>
              this.setState({ selectedDay: dayMoment })
          }}
        />
      </div>
    );
  }
}

export default NavigationCalendar;
