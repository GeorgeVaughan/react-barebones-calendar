import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import Demo from "./Demo";

import "./index.scss";

ReactDOM.render(<Demo />, document.getElementById("root"));
registerServiceWorker();
