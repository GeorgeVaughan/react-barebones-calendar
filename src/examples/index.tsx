import React from "react";

import BasicCalendar from "./BasicCalendar";
import RangeSelectCalendar from "./RangeSelectCalendar";
import DropdownCalendar from "./DropdownCalendar";
import NavigationCalendar from "./NavigationCalendar";
import CombinedCalendar from "./CombinedCalendar";
import ScrollCalendar from "./ScrollCalendar";
import LargeCalendar from "./LargeCalendar";

import "styles/defaultStyle.scss";
import "./index.scss";

const TEMPLATES = [
  {
    title: "Basic Calendar",
    component: BasicCalendar,
    description:
      "This is a very basic calendar, simply displaying a month with weekends blocked off, and the option to select a certain day."
  },
  {
    title: "Range Select Calendar",
    component: RangeSelectCalendar,
    description:
      "This component allows a selection of a range of days, and uses more of the 'modifiers' prop."
  },
  {
    title: "Dropdown Calendar",
    component: DropdownCalendar,
    description:
      "This component shows how the component could be used in conjunction with an <input/> element."
  },
  {
    title: "Navigation Calendar",
    component: NavigationCalendar,
    description:
      "This component shows one of the simpler ways to create a navigational calender, with two buttons to slide backwards and forwards by a month."
  },
  {
    title: "Combined Calendar",
    component: CombinedCalendar,
    description:
      "This component is a more real world like solution, with a combination of range select, dropdown, and navigation functionality."
  },
  {
    title: "Scroll Calendar",
    component: ScrollCalendar,
    description: "This component shows a calendar that is scrollable."
  },
  {
    title: "Large Calendar",
    component: LargeCalendar,
    description:
      "This components shows a large calendar with the ability to add events to days."
  }
];

export default () => (
  <div className="templates">
    <h1>Templates</h1>
    {TEMPLATES.map(({ title, component, description }) => (
      <div key={title} className="template">
        <h2>{title}</h2>
        <div className="component">{React.createElement(component)}</div>
        <div className="description">{description}</div>
      </div>
    ))}
  </div>
);
