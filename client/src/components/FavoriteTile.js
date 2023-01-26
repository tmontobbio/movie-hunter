import React from "react";
import x_img from "../components/img/x.png"
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
			<h3>
				{title} - {year}
			</h3>
			<Divider />
			<img src={image} alt="card-tile" className="movie-poster" onClick={queryDetails} />
			<div className="card-btn-holder">
				<Button inverted color="red" onClick={deleteFavorite} ><img className="icon-small" src={x_img} /></Button>
			</div>
		</div>
	);
}
