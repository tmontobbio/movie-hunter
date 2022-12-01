import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Divider } from "semantic-ui-react";

export default function FavoriteTile({
	title,
	year,
	image,
	id,
	setFavorites,
	imdb,
}) {
	const navigate = useNavigate();
	function deleteFavorite() {
		fetch(`/api/favorites/${id}`, { method: "DELETE" }).then((r) => {
			if (r.ok) {
				setFavorites((fav) => fav.filter((f) => f.id !== id));
			}
		});
	}

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
			<img src={image} alt="card-tile" onClick={queryDetails} />
			<Button inverted color="red" onClick={deleteFavorite}>
				X
			</Button>
		</div>
	);
}
