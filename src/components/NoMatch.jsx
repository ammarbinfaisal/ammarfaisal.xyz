import React from "react";
import Helmet from "react-helmet";

const NoMatch = () => (
	<div
		id="404-pg"
		style={{
			height: "100vh",
			width: "100%",
			zIndex: 10000,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
			backgroundColor: "#fff",
			fontFamily:
				"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
		}}
	>
	<Helmet><title>404! Not Found</title></Helmet>
		<h1
			style={{
				fontWeight: 500,
				color: "#404040",
				fontSize: "calc(2.8vw + 1.2vh + 2em)",
				transform: "translateY(-20vh)",
			}}
		>
			NOT FOUND
				</h1>
		<p
			style={{
				color: "#404040",
				fontSize: "calc(.8vw + .8vh + 1em)",
				marginTop: "calc(2vh + .7em)",
				padding: "0 calc(2vw + .7em)",
				lineHeight: 1.5,
				transform: "translateY(-20vh)",
			}}
		>
			You just hit a route that doesn&#39;t exist...<br />
			And the sadness... :(
				</p>
	</div>
);

export default NoMatch;
