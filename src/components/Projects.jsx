import React, { PureComponent, Component } from "react";
import Helmet from "react-helmet";

let indexOfProject = -7;
class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opacity: 0,
			key: ++indexOfProject
		}
	}
	componentDidMount() {
		const fadeIn = () => {
			const el = document.querySelector(`#project${this.state.key}`);
			if(el){
				const topOffset = el.offsetTop;
				const scrolledPixels = window.scrollY;
				if (topOffset > scrolledPixels - 300 && topOffset <= (scrolledPixels + window.innerHeight))
					this.setState({ opacity: 1 })
				else
					this.setState({ opacity: 0 })
			}
		}
		fadeIn();
		window.addEventListener("scroll", fadeIn);
		window.addEventListener("resize", fadeIn);
	}
	render() {
		return (
			<div className="project" style={{ opacity: this.state.opacity, transition: `1s`, transitionDelay: `${(this.state.key / 10) * .1}s` }} id={`project${this.state.key}`}>
				<div>
					<h3>{this.props.title}</h3>
					<p className="info">{this.props.info}</p>
					<p className="tech">{this.props.techUsed}</p>
				</div>
				<div className="links">
					{this.props.source ? <a href={this.props.source} rel="noopeneer norefferer" target="_blank">Source</a> : ""}
					{this.props.link ? <a href={this.props.link} rel="noopeneer norefferer" target="_blank">Link&nbsp;<i className="fas fa-external-link-alt fa-xs"></i></a> : ""}
				</div>
			</div>
		);
	}
}

class Projects extends PureComponent {
	render() {
		return (
			<div id="projectspage" className="itim">
				<Helmet>
					<title>Ammar's Projects</title>
				</Helmet>
				<h2 className="heading">My projects</h2>
				<p className="mark">
					This list might not be up to date so check <a href="https://github.com/ammarbinfaisal">my&nbsp;github</a>
				</p>
				<div id="projects">
					<Project
						link="https://cmsmunaliganj.com"
						title="cmsmunaliganj.com"
						info="my school's model united nations' website."
						techUsed="made with gatsbyjs and styled with sass."
					/>
					<Project
						link="https://anushkaa.netlify.com"
						title="anushkaa.netlify.com"
						info="anushka's blog."
						techUsed="made with gatsbyjs and used netlify cms for content management."
					/>
					<Project
						source="https://prettinitgithub.com/ammarbinfaisal/depson"
						link="https://npmjs.com/package/depson"
						title="depson"
						key={++indexOfProject}
						info="a command line tool for cheking whether a nodejs project depends on a specific npm package."
						techUsed="made in nodejs"
					/>
					<Project
						source="https://github.com/ammarbinfaisal/prettinit"
						link="https://npmjs.com/package/prettinit"
						title="prettinit"
						key={++indexOfProject}
						info="a command line tool for setting up .prettierrc file."
						techUsed="made in nodejs and has six dependencies :D"
					/>
					<Project
						link="https://dict.surge.sh"
						title="dict.surge.sh"
						key={++indexOfProject}
						source="https://github.com/ammarbinfaisal/dict"
						info="a dictionary progressive webapp."
						techUsed="made with reactjs and uses an api which procures definitions from google's dictionary using webscraping."
					/>
					<Project
						source="https://github.com/ammarbinfaisal/terminal-timer"
						link="https://npmjs.com/package/terminal-timer"
						title="terminal timer"
						key={++indexOfProject}
						info="a tier to work in the terminal."
						techUsed="made in nodejs"
					/>
					<Project
						source="https://prettinitgithub.com/ammarbinfaisal/"
						title="Memory Watcher"
						key={++indexOfProject}
						info="a command line app to monitor memory usage and notify when less than one GiB of memory is free"
						techUsed="made with plain nodejs and some shell scripts"
					/>
					<Project
						link="https://codepen.io/ammarbinfaisal/full/jzJGoE/"
						title="Wikipedia Search"
						key={++indexOfProject}
						info="a simple frontend webapp which can be used to search wikipedia."
						techUsed="made with html(pug), css(sass) and vanilla js"
					/>
					<Project
						source="https://github.com/ammarbinfaisal/Merriam-Webster-Bot"
						link="https://telegram.me/merriamwebsterbot"
						title="Merriam Webster Bot"
						key={++indexOfProject}
						info="a telegram bot which sends link to the Merriam&nbsp;Webster's webpage defining the word which you send it"
						techUsed="made in nodejs without using any telegram api wrapper"
					/>
				</div>
			</div>
		);
	}
}

export default Projects;
