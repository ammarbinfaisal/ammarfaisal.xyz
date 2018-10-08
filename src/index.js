import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Unsupported from "./Unsupported";
import registerServiceWorker from "./registerServiceWorker";

if (document.body.style.grid === "")
    ReactDOM.render(<App />, document.getElementById("root"));
else
    ReactDOM.render(<Unsupported />, document.getElementById("root"));

registerServiceWorker();
