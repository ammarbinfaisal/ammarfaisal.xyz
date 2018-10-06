import React from "react";

const Unsupported = () => (
    <div
        style={
            {
                backgroundColor: "#eee",
                height: "100vh",
                width: "100%"
            }
        }
    >
        <p
            style={
                {
                    fontFamily: "Ubuntu, \"Open Sans\", Roboto, sans-serif",
                    color: "#404040",
                    fontSize: "calc(.8vw + 1.4vh + 1em)",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }
            }
        >
            You are using an outdated browser which does not supports the
            latest web standards/tecknologies which this websites is using.
                </p>
    </div>
)

export default Unsupported;
