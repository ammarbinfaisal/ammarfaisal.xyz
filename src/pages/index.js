import React, { PureComponent } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout"

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

const Intro = () => (
    <div id="intro" className="sans">
        <p className="itim">Hello there,</p>
        <h1 className="heading colored">I am Ammar,</h1>
        <p className="itim">
            a hobbyist coder, currently in highschool who is learning and exploring web development.<br />
            I can make webapps for you using reactjs on the frontend and nodejs on the backend.<br />
        </p>
        <div className="flex">
            <Link to="/projects" className="btn itim">What have I made?</Link>
            <Link to="/contact" className="btn itim">Contact Me :)</Link>

        </div>
        {/* <Footer /> */}
    </div>
);


class IndexPage extends PureComponent {
    render() {
        return (
            <Layout id="indexpage">
                <Intro />
                <Social />
            </Layout>
        );
    }
}

export default IndexPage;
