import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import Demo from "./Demo";

import "./index.css";

ReactDOM.render(<Demo />, document.getElementById("root"));
registerServiceWorker();
