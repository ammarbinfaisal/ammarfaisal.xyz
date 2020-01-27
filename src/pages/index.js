import React, { PureComponent } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const Social = () => (
  <div id="social">
    <ul>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://twitter.com/ammarbinfaisal1"
          title="twitter"
        >
          <i className="fab fa-twitter" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://github.com/ammarbinfaisal" 
          title="github"
        >
          <i className="fab fa-github" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://stackoverflow.com/users/8586459/ammar?tab=profile"
          title="stackoverflow"
        >
          <i className="fab fa-stack-overflow" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.to/ammarbinfaisal"
          title="dev.to"
        >
          <i className="fab fa-dev" />
        </a>
      </li>
    </ul>
    <a href="mailto:binfaisal.ammar@gmail.com" class="itim">binfaisal.ammar@gmail.com</a>
  </div>
);

const Intro = () => (
    <div id="intro" className="sans">
        <h1 className="heading colored">Malik Ammar Faisal</h1>
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
