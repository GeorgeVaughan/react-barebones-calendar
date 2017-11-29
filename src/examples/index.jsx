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
      "This is a very basic calendar, simply displaying a month with weekends blocked off, and the option to select a certain day. The other examples shown here are based upon this example.",
    code: ""
  },
  { title: "Range Select Calendar", component: RangeSelectCalendar },
  { title: "Dropdown Calendar", component: DropdownCalendar },
  { title: "Button Navigation Calendar", component: ButtonNavigationCalendar },
  { title: "Scroll Calendar", component: ScrollCalendar }
];

export default () => (
  <div className="examples">
    <h1>Examples</h1>
    {EXAMPLES.map(({ title, component, description, code }) => (
      <div key={title} className="example">
        <h2>{title}</h2>
        <div className="component">{React.createElement(component)}</div>
        <div className="description">{description}</div>
        <div className="code">Code: {code}</div>
      </div>
    ))}
  </div>
);
