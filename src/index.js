import React from "react";
import { render } from "react-dom";
import App from "./App";
import Unsupported from "./Unsupported";
import registerServiceWorker from "./registerServiceWorker";


const rootElement = document.getElementById("root");



if(document.body.style.grid !== "")
	render(<Unsupported />, rootElement);
else	
	render(<App />, rootElement);

registerServiceWorker();
