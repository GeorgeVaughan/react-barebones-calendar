import React from "react";

import MonthTitle from "components/MonthTitle";

import { asDefaultComponent } from "components/utils/ComponentWrappers";

const MonthTitleNav = ({ navigate, ...props }) => (
  <div className="calendar-button-nav">
    <button
      className="left"
      onClick={() => navigate && navigate(-1)}
      disabled={!navigate}
    >
      {"<"}
    </button>
    <MonthTitle {...props} />
    <button
      className="right"
      onClick={() => navigate && navigate(1)}
      disabled={!navigate}
    >
      {">"}
    </button>
  </div>
);

export default asDefaultComponent(MonthTitleNav, "calendar-month-title");
