import React, { Component } from "react";
import Examples from "examples";

import "./Demo.scss";

class Demo extends Component<any, any> {
  render() {
    return (
      <div className="demo">
        <Examples />
      </div>
    );
  }
}

export default Demo;
