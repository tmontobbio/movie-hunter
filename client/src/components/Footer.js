import React from "react";
import git from "./img/gitlogo.png";
import linkedin from "./img/linkedin.png";

export default function Footer() {
	return (
		<div id="footer">
			<div className="logos">
				<a
					href="https://github.com/tmontobbio/movie-hunter"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={git} alt="git" />
				</a>
			</div>
			<div id="footer-text">
				<ul>
					<li>Website design by Tyler Montobbio</li>
					<li>Data courtesy of OMDB API & IMDB.</li>
				</ul>
			</div>
			<div className="logos">
				<a
					href="https://linkedin.com/in/tmontobbio"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={linkedin} alt="linkedin" />
				</a>
			</div>
		</div>
	);
}
