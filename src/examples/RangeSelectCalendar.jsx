import React, { Component } from "react";
import moment from "moment";

import Calendar from "components/Calendar";
import { getMonthsFrom } from "components/utils/MomentHelpers";
import {
  todayModifier,
  sameDayModifier,
  inRangeModifier,
  emptyModifier,
  weekendModifier
} from "components/utils/Modifiers";

class RangeSelectCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monthMoments: getMonthsFrom(moment(), 1),
      startDay: null,
      endDay: null,
      hoverDay: null,
      selecting: "START"
    };
  }
  render() {
    const { monthMoments, startDay, endDay, hoverDay, selecting } = this.state;

    const modifiers = [
      sameDayModifier("selected start", startDay),
      endDay || hoverDay
        ? sameDayModifier("selected end", endDay)
        : sameDayModifier("selected end", startDay),
      todayModifier,
      emptyModifier,
      weekendModifier,
      inRangeModifier("in-range", startDay, endDay, true)
    ];
    if (hoverDay && selecting === "END") {
      modifiers.push(
        inRangeModifier("in-range-hover", startDay, hoverDay, true)
      );
      modifiers.push(sameDayModifier("end", hoverDay));
    }

    return (
      <Calendar
        monthGridProps={{
          monthMoments
        }}
        dayProps={{
          modifiers,
          onClick: (e, { dayMoment }) => {
            switch (selecting) {
              case "START":
                this.setState({
                  startDay: dayMoment,
                  selecting: "END",
                  endDay: null
                });
                break;
              case "END":
              default:
                this.setState({ endDay: dayMoment, selecting: "START" });
                break;
            }
          },
          onMouseEnter: (e, { dayMoment }) =>
            this.setState({ hoverDay: dayMoment }),
          onMouseLeave: () => this.setState({ hoverDay: null })
        }}
      />
    );
  }
}

export default RangeSelectCalendar;
