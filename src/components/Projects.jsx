import React, { PureComponent } from "react";
import Helmet from "react-helmet";

class Project extends PureComponent {
	render() {
		return (
			<div className="project">
				<h3>{this.props.title}</h3>

				{this.props.img ? <div className="image">
					<img alt={this.props.img.replace(/\/|images/g, "")} sizes="" src={`images/${this.props.img}`} />
				</div> : ""}
				<p className="info">{this.props.info}</p>
				<p className="tech">{this.props.techUsed}</p>
				<div className="links">
					{this.props.github ? <a href={this.props.github}>Github</a> : ""}
					{this.props.link ? <a href={this.props.link}>Link&nbsp;<i className="fas fa-external-link-alt fa-xs"></i></a> : ""}
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
						github="https://prettinitgithub.com/ammarbinfaisal/"
						title="Memory Watcher"
						img="memory-watcher.png"
						info="a command line app to monitor memory usage and notify when less than one GiB of memory is free"
						techUsed="made with plain nodejs and some shell scripts"
					/>
					<Project
						github="https://github.com/ammarbinfaisal/Merriam-Webster-Bot"
						link="https://telegram.me/merriamwebsterbot"
						title="Merriam Webster Bot"
						img="mw-bot.png"
						info="a telegram bot which sends link to the Merriam&nbsp;Webster's webpage defining the word which you send it"
						techUsed="made in nodejs without using any telegram api wrapper"
					/>
					<Project
						github="https://prettinitgithub.com/ammarbinfaisal/prettinit"
						link="https://npmjs.com/package/prettinit"
						title="Prettinit"
						img="prettinit.png"
						info="a command line tool for setting up .prettierrc file."
						techUsed="made in nodejs and has six dependencies :D"
					/>
					<Project
						link="https://codepen.io/ammarbinfaisal/full/jzJGoE/"
						title="Wikipedia Search"
						img="wiki-search.png"
						info="a simple frontend webapp which can be used to search wikipedia."
						techUsed="made with html(pug), css(sass) and vanilla js"
					/>
				</div>
			</div>
		);
	}
}

export default Projects;
