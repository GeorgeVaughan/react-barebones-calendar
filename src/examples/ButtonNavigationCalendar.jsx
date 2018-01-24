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

  navigate = change => {
    const { startMonth } = this.state;
    this.setState({
      startMonth: startMonth.clone().add(change, "month")
    });
  };

  render() {
    const { startMonth, selectedDay } = this.state;
    return (
      <div>
        <Calendar
          monthGridProps={{
            monthMoments: getMonthsFrom(startMonth, 1)
          }}
          monthTitleProps={{
            renderOverride: ({ defaultRender, ...props }) => (
              <div className="calendar-button-nav">
                <button className="left" onClick={() => this.navigate(-1)}>
                  {"<"}
                </button>
                {React.createElement(defaultRender, props)}
                <button className="right" onClick={() => this.navigate(1)}>
                  {">"}
                </button>
              </div>
            )
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
