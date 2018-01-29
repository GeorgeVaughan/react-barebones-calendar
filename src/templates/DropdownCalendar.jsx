import React, { Component } from "react";
import moment from "moment";

import Popup from "components/Popup";
import Calendar from "components/Calendar";
import { getMonthsFrom } from "components/utils/MomentHelpers";
import {
  todayModifier,
  selectedModifier,
  emptyModifier,
  weekendModifier
} from "components/utils/Modifiers";

class DropdownCalendar extends Component {
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
      <Popup
        button={<input value={selectedDay.format("DD / MM / YY")} readOnly />}
        renderContent={() => (
          <Calendar
            className="dropdown"
            monthGridProps={{
              monthMoments
            }}
            dayProps={{
              modifiers,
              onClick: (_, { dayMoment }) =>
                this.setState({ selectedDay: dayMoment })
            }}
          />
        )}
      />
    );
  }
}

export default DropdownCalendar;