import React from "react";

const Social = () => (
    <div id="social">
        <p className="heading colored">Find me on :</p>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://twitter.com/ammarbinfaisal1"
                >
                    <i className="fab fa-twitter" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://instagram.com/ammarbinfaisal"
                >
                    <i className="fab fa-instagram" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://github.com/ammarbinfaisal"
                >
                    <i className="fab fa-github" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://stackoverflow.com/users/8586459/ammar?tab=profile"
                >
                    <i className="fab fa-stack-overflow" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://codepen.io/ammarbinfaisal"
                >
                    <i className="fab fa-codepen" />
                </a>
            </li>
        </ul>
    </div>
);

export default Social;