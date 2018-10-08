import React, { PureComponent } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./components/Landing";
import Projects from "./components/Projects";
import NoMatch from "./components/NoMatch";

import "./index.css"

class App extends PureComponent {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/projects" component={Projects} />
					{/* <Route path="/slowconnection" component={slowconnection} /> */}
					<Route component={NoMatch} />
				</Switch>
			</Router>
		)
	}
}

export default App;
