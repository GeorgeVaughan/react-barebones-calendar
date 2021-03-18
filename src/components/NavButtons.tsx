import React from "react";

import { asDefaultComponent } from "components/utils/ComponentWrappers";

export const NavButton = asDefaultComponent(
  ({ navigate, disabled, children, onClick, ...props }) => (
    <button
      onClick={e => {
        navigate && navigate();
        onClick && onClick(e);
      }}
      disabled={!navigate && !disabled}
      {...props}
    >
      {children}
    </button>
  ),
  "calendar-nav-button"
);

const NavButtons = ({ navigate, ...props }) =>
  navigate ? (
    <div {...props}>
      <NavButton className="left" navigate={navigate && (() => navigate(-1))}>
        {"<"}
      </NavButton>
      <NavButton className="right" navigate={navigate && (() => navigate(1))}>
        {">"}
      </NavButton>
    </div>
  ) : (
    <div />
  );

export default asDefaultComponent(NavButtons, "calendar-nav-buttons");
