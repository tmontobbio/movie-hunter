import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Divider } from "semantic-ui-react";

export default function MovieTile({ imdb, title, year, image }) {
	const navigate = useNavigate();

	function queryDetails() {
		navigate(`/details/${imdb}`);
	}

	return (
		<div className="movie-card">
			<h3>
				{title} - {year}
			</h3>
			<Divider />
			<img src={image} alt="movie-card" className="movie-poster" onClick={queryDetails} />
		</div >
	);
}
