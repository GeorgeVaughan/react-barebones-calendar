import React, { Component } from "react";
import moment from "moment";

import Calendar from "components/Calendar";
import Popup from "components/Popup";
import { getMonthsFrom } from "components/utils/MomentHelpers";
import {
  todayModifier,
  emptyModifier,
  isBeforeModifier
} from "components/utils/Modifiers";
import { combineClasses } from "components/utils/PropHelpers";

import "styles/largeStyle.scss";

class LargeCalendarDay extends Component<any, any> {
  popup;

  constructor(props) {
    super(props);

    this.state = {
      events: [],
      nextEvent: ""
    };
  }

  addNextEvent = () => {
    const { events, nextEvent } = this.state;
    if (nextEvent === "") return;
    this.setState({ nextEvent: "", events: [...events, nextEvent] });
  };

  updateNextEvent = e => {
    const nextEvent = e.target.value;
    this.setState({ nextEvent });
  };

  deleteEvent = i => {
    const { events } = this.state;
    this.setState({ events: [...events.slice(0, i), ...events.slice(i + 1)] });
  };

  render() {
    const { className, dayMoment, defaultRender, ...props } = this.props;
    const { events, open } = this.state;

    return (
      <div className={combineClasses(className, open && "selected")} {...props}>
        <Popup
          ref={ref => (this.popup = ref)}
          onToggle={open => this.setState({ open })}
          button={
            <div>
              <div className="calendar-date">
                {dayMoment ? dayMoment.format("D") : ""}
              </div>
              <div className="calendar-events">
                {events.map((event, i) => (
                  <div key={i} className="calendar-event">
                    <button
                      className="calendar-event-delete"
                      onClick={e => {
                        this.deleteEvent(i);
                        e.stopPropagation();
                      }}
                    >
                      X
                    </button>
                    {event}
                  </div>
                ))}
              </div>
            </div>
          }
          renderContent={() => (
            <input
              autoFocus
              value={this.state.nextEvent}
              onChange={this.updateNextEvent}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  this.addNextEvent();
                  this.popup.toggleOpen();
                  e.stopPropagation();
                }
              }}
            />
          )}
        />
      </div>
    );
  }
}

class LargeCalendar extends Component<any, any> {
  today;

  constructor(props) {
    super(props);

    this.today = moment().startOf("day");

    this.state = {
      monthMoments: getMonthsFrom(moment(), 1)
    };
  }
  render() {
    const { monthMoments } = this.state;

    const modifiers = [
      todayModifier,
      emptyModifier,
      isBeforeModifier("invalid", this.today)
    ];

    return (
      <Calendar
        className="calendar-large"
        monthGridProps={{
          monthMoments
        }}
        dayProps={{
          modifiers,
          renderOverride: props => <LargeCalendarDay {...props} />
        }}
      />
    );
  }
}

export default LargeCalendar;
