import React from "react";
import {Link} from "react-router-dom";

const Footer = () => (
    <div id="footer" className="colored">
        <Link to="/blog" className="itim">blog</Link>
        <Link to="/projects" className="itim">projects</Link>
    </div>
);

export default Footer;