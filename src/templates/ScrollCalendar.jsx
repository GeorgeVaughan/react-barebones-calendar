import React, { Component } from "react";

import Calendar from "components/Calendar";
import MonthGrid from "components/MonthGrid";
import WeekHeader from "components/WeekHeader";
import { getMonthsFrom, getToday } from "components/utils/MomentHelpers";
import {
  todayModifier,
  selectedModifier,
  emptyModifier,
  weekendModifier
} from "components/utils/Modifiers";

import "./ScrollCalendar.css";

class ScrollCalendar extends Component {
  constructor(props) {
    super(props);

    this.monthTitlesRefs = {};

    this.state = {
      monthMoments: getMonthsFrom(getToday(), 12),
      selectedDay: null
    };
  }

  componentDidMount() {
    this.onScroll();
  }

  onScroll = () => {
    const scrollY = this.scrollBoxRef.scrollTop;

    // Position month headers
    Object.keys(this.monthTitlesRefs)
      .map(key => this.monthTitlesRefs[key])
      .forEach(ref => {
        const minY = 0;
        const maxY = ref.parentNode.offsetHeight - 30;

        let posY = scrollY - ref.parentNode.offsetTop;
        posY = Math.min(Math.max(posY, minY), maxY);

        ref.style = `transform: translateY(${posY}px)`;
      });
  };

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
        className="scroll"
        renderOverride={({ className }) => (
          <div className={className}>
            <WeekHeader />
            <div
              ref={ref => (this.scrollBoxRef = ref)}
              className="scroll-box"
              onScroll={this.onScroll}
            >
              <MonthGrid
                monthMoments={monthMoments}
                dayProps={{
                  modifiers,
                  onClick: (_, { dayMoment }) =>
                    this.setState({ selectedDay: dayMoment })
                }}
                monthTitleProps={{
                  renderOverride: ({
                    monthMoment,
                    defaultRender,
                    ...props
                  }) => (
                    <div
                      ref={ref =>
                        (this.monthTitlesRefs[
                          monthMoment.format("MMYYYY")
                        ] = ref)}
                      {...props}
                    >
                      {monthMoment.format("MMMM YYYY")}
                    </div>
                  )
                }}
                weekHeaderProps={{
                  renderOverride: () => <div />
                }}
              />
            </div>
          </div>
        )}
      />
    );
  }
}

export default ScrollCalendar;
