import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import registerServiceWorker from "./registerServiceWorker";

import Examples from "examples";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Examples />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
