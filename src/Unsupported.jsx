import React from "react";
import Helmet from "react-helmet";

const Unsupported = () => (
    <div
        style={
            {
                backgroundColor: "#fefefe",
                height: "100vh",
                width: "100%"
            }
        }
    >
    <Helmet>
        <title>Stupid browser</title>
    </Helmet>
        <p
            style={
                {
                    fontFamily: "Ubuntu, \"Open Sans\", Roboto, sans-serif",
                    color: "#404040",
                    fontSize: "2em",
                    position: "absolute",
                    top: "45%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }
            }
        >
            You are using an outdated browser which does not support the
            latest web standards/technologies which this websites is using.
            <br /><br />
            Sorry, you'll have to get a better browser for seeing this website.
                </p>
    </div>
)

export default Unsupported;
