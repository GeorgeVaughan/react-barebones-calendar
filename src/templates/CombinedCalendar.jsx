import React, { Component } from "react";
import moment from "moment";

import Calendar from "components/Calendar";
import Popup from "components/Popup";
import {
  getMonthsFrom,
  getStartAndEndDay
} from "components/utils/MomentHelpers";
import {
  todayModifier,
  sameDayModifier,
  inRangeModifier,
  emptyModifier,
  weekendModifier
} from "components/utils/Modifiers";

const SELECTING_STATE = {
  START: "SELECTING_STATE.START",
  END: "SELECTING_STATE.END"
};

class ButtonNavigationCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startMonth: moment(),
      monthMoments: getMonthsFrom(moment(), 2),
      startDay: null,
      endDay: null,
      hoverDay: null,
      selecting: SELECTING_STATE.START
    };
  }

  navigate = change => {
    const { startMonth } = this.state;

    const newStartMonth = startMonth.clone().add(change, "month");
    this.setState({
      startMonth: newStartMonth,
      monthMoments: getMonthsFrom(newStartMonth, 2)
    });
  };

  onDayClick = (e, { dayMoment }) => {
    const { selecting } = this.state;
    switch (selecting) {
      case SELECTING_STATE.START:
      default:
        this.setState({
          startDay: dayMoment,
          selecting: SELECTING_STATE.END,
          endDay: null
        });
        break;
      case SELECTING_STATE.END:
        const { startDay, endDay } = getStartAndEndDay(
          this.state.startDay,
          dayMoment
        );
        this.setState({
          startDay,
          endDay,
          selecting: SELECTING_STATE.START
        });
        break;
    }
  };

  render() {
    const { monthMoments, startDay, endDay, hoverDay, selecting } = this.state;

    const { startDay: hoverStartDay, endDay: hoverEndDay } =
      selecting === SELECTING_STATE.END
        ? getStartAndEndDay(startDay, hoverDay)
        : { startDay, endDay };

    const modifiers = [
      sameDayModifier("selected start", hoverStartDay),
      sameDayModifier("selected end", endDay || hoverEndDay || startDay),
      todayModifier,
      emptyModifier,
      weekendModifier,
      inRangeModifier("in-range", startDay, endDay, true)
    ];
    if (selecting === SELECTING_STATE.END && hoverEndDay) {
      modifiers.push(
        inRangeModifier("in-range-hover", hoverStartDay, hoverEndDay, true)
      );
    }

    const inputValue = startDay
      ? startDay.format("DD/MM/YY") +
        (endDay ? " - " + endDay.format("DD/MM/YY") : "")
      : "";

    return (
      <div>
        <Popup
          button={<input value={inputValue} readOnly />}
          renderContent={() => (
            <Calendar
              className="dropdown calendar-range"
              navButtonProps={{
                navigate: this.navigate
              }}
              monthGridProps={{
                monthMoments
              }}
              dayProps={{
                modifiers,
                onClick: this.onDayClick,
                onMouseEnter: (e, { dayMoment }) =>
                  this.setState({ hoverDay: dayMoment }),
                onMouseLeave: () => this.setState({ hoverDay: null })
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default ButtonNavigationCalendar;
