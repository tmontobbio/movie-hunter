import React from "react";
import { useNavigate } from "react-router-dom";
import { Divider } from "semantic-ui-react";

export default function SearchTile({ imdb, title, year, image }) {
	const navigate = useNavigate();

	function queryDetails() {
		navigate(`/details/${imdb}`);
	}
	return (
		<div className="movie-card">
			<div className="tile-title-container">
				<h3>
					{title} - {year}
				</h3>
			</div>
			<Divider />
			<img src={image} alt="movie-card" onClick={queryDetails} />
		</div>
	);
}
