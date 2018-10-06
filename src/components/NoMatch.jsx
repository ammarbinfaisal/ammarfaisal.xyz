import React from "react";

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
		<h1
			style={{
				fontWeight: 500,
				color: "#404040",
				fontSize: "calc(1.4vw + 3.2vh)",
				transform: "translateY(-20vh)",
			}}
		>
			NOT FOUND
				</h1>
		<p
			style={{
				color: "#404040",
				fontSize: "calc(.8vw + 1.4vh + 1em)",
				marginTop: "3vh",
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
