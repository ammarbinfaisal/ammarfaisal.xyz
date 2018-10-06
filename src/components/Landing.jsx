import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Social from "./Social"

const Intro = () => (
    <div id="intro">
        <h2>Hello there,</h2>
        <h1 className="heading colored">I am Ammar,</h1>
        <h2>
            a hobbyist coder, currently in highschool who is learning/exploring web and app development with nodejs and python
            and has made some <Link to="projects" className="colored">cool&nbsp;stuff</Link> in them.
        </h2>
    </div>
);

class IndexPage extends PureComponent {
    render() {
        return (
            <div id="indexpage">
                <Helmet>
                    <title>Ammar Faisal</title>
                </Helmet>
                <Intro />
                <Social />
            </div>
        );
    }
}

export default IndexPage;
