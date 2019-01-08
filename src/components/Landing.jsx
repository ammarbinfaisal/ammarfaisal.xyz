import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Social from "./Social"
import Footer from "./Footer";

const Intro = () => (
    <div id="intro" className="sans">
        <p className="itim">Hello there,</p>
        <h1 className="heading colored">I am Ammar,</h1>
        <p className="itim">
            a hobbyist coder, currently in highschool who is learning and exploring web development.<br />
            I can make wesbites/apps for you using reactjs on frontend and nodejs/golang on backend.<br />
            I have made some open source stuff which you can check out <Link to="projects" className="colored">here</Link>.
        </p>
        <Footer />
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
