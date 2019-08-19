import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      transform: "translateY(30%)",
      index: this.props.index
    };
  }
  componentDidMount() {
    const fadeIn = () => {
      const el = document.querySelector(`#project${this.state.index}`);
      if (el) {
        const topOffset = el.offsetTop;
        const scrolledPixels = window.scrollY;
        if (
          topOffset > scrolledPixels - 300 &&
          topOffset <= scrolledPixels + window.innerHeight
        )
          this.setState({ opacity: 1, transform: "translateY(0)" });
        else this.setState({ opacity: 0, transform: "translateY(25%)" });
      }
    };
    fadeIn();
    window.addEventListener("scroll", fadeIn);
    window.addEventListener("resize", fadeIn);
  }
  render() {
    return (
      <div
        className="project"
        style={{
          opacity: this.state.opacity,
          transform: this.state.transform,
          transition: `${0.8 + this.state.index / 8}s`
        }}
        id={`project${this.state.index}`}
      >
        <div>
          <h3>{this.props.title}</h3>
          <p className="description">{this.props.description}</p>
          <p className="tech">{this.props.techUsed}</p>
        </div>
        <div className="links">
          {this.props.source ? (
            <a
              href={this.props.source}
              rel="noopener noreferrer"
              target="_blank"
            >
              Source
            </a>
          ) : (
            ""
          )}
          {this.props.link ? (
            <a href={this.props.link} rel="noopener noreferrer" target="_blank">
              Link
              <i className="fas fa-external-link-alt fa-xs" />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

const Projects = props => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  title
                  link
                  description
                  techUsed
                  source
                }
              }
            }
          }
        }
      `}
      render={projectsData => {
        projectsData = projectsData.allMarkdownRemark.edges.map(edge => edge.node.frontmatter);
        return (
        <Layout id="projectspage" className="itim">
          <Helmet>
            <title>Ammar's Projects</title>
          </Helmet>
          <h2 className="heading">My Projects</h2>
          <div id="projects">
            {projectsData.map((_project, i) => (
              <Project {..._project} index={i} key={i} />
            ))}
          </div>
        </Layout>
      )}
    }
    />
  );
};

export default Projects;
