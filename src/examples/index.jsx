import React from "react";

import BasicCalendar from "examples/BasicCalendar";
import RangeSelectCalendar from "examples/RangeSelectCalendar";
import DropdownCalendar from "examples/DropdownCalendar";
import ButtonNavigationCalendar from "examples/ButtonNavigationCalendar";
import ScrollCalendar from "examples/ScrollCalendar";

import "styles/defaultStyle.css";
import "./index.css";

const EXAMPLES = [
  {
    title: "Basic Calendar",
    component: BasicCalendar,
    description:
      "This is a very basic calendar, simply displaying a month with weekends blocked off, and the option to select a certain day. The other examples shown here are based upon this example."
  },
  {
    title: "Range Select Calendar",
    component: RangeSelectCalendar,
    description:
      "This component allows a selection of a range of days, and shows the use of the 'modifiers' prop."
  },
  {
    title: "Dropdown Calendar",
    component: DropdownCalendar,
    description:
      "This component shows how the component could be used in conjunction with an <input/> element."
  },
  {
    title: "Button Navigation Calendar",
    component: ButtonNavigationCalendar,
    description:
      "This component shows one of the simpler ways to create a navigational calender, with two buttons to slide backwards and forwards by a month."
  },
  {
    title: "Scroll Calendar",
    component: ScrollCalendar,
    description: "This component shows a calendar that is scrollable."
  }
];

export default () => (
  <div className="examples">
    <h1>Examples</h1>
    {EXAMPLES.map(({ title, component, description, code }) => (
      <div key={title} className="example">
        <h2>{title}</h2>
        <div className="component">{React.createElement(component)}</div>
        <div className="description">{description}</div>
      </div>
    ))}
  </div>
);
