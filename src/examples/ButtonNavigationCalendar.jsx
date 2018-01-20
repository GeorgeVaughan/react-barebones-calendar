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

class ButtonNavigationCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startMonth: moment(),
      selectedDay: moment()
    };
  }
  render() {
    const { startMonth, selectedDay } = this.state;
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              startMonth: startMonth.clone().subtract(1, "month")
            })}
        >
          {"<"}
        </button>
        <button
          onClick={() =>
            this.setState({
              startMonth: startMonth.clone().add(1, "month")
            })}
        >
          {">"}
        </button>
        <Calendar
          monthGridProps={{
            monthMoments: getMonthsFrom(startMonth, 1)
          }}
          dayProps={{
            modifiers: [
              todayModifier,
              selectedModifier(selectedDay),
              emptyModifier,
              weekendModifier
            ],
            onClick: (_, { dayMoment }) =>
              this.setState({ selectedDay: dayMoment })
          }}
        />
      </div>
    );
  }
}

export default ButtonNavigationCalendar;
