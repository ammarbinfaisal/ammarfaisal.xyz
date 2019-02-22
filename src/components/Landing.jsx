import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Social from "./Social";
import Helmet from "react-helmet";
// import Footer from "./Footer";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-134084954-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Intro = () => (
    <div id="intro" className="sans">
        <p className="itim">Hello there,</p>
        <h1 className="heading colored">I am Ammar,</h1>
        <p className="itim">
            a hobbyist coder, currently in highschool who is learning and exploring web development.<br />
            I can make websites/webapps for you using reactjs on frontend and nodejs on backend.<br />
            I have made some open source stuff which you can check out <Link to="projects" className="colored">here</Link>.
        </p>
        {/* <Footer /> */}
    </div>
);

class IndexPage extends PureComponent {
    render() {
        return (
            <div id="indexpage">
		<Helmet>
			<title>Malik Ammar Faisal</title>
		</Helmet>
                <Intro />
                <Social />
            </div>
        );
    }
}

export default IndexPage;
