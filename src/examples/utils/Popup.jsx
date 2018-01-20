import React from "react";

import overridable from "components/utils/componentWrappers/overridable";

import "./Popup.css";

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = event => {
    if (this.state.open && !this.root.contains(event.target)) {
      this.toggleOpen();
    }
  };
  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  onKeyDown = () => {
    if (this.state.open) {
      setTimeout(() => {
        if (!this.root.contains(document.activeElement)) this.toggleOpen();
      }, 0);
    }
  };
  render() {
    const { button, renderContent } = this.props;
    const { open } = this.state;
    return (
      <div
        ref={ref => (this.root = ref)}
        onKeyDown={this.onKeyDown}
        className="popup"
      >
        <span onClick={this.toggleOpen}>{button}</span>
        {open && renderContent()}
      </div>
    );
  }
}

export default overridable(Popup);
