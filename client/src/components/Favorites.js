import React from "react";
import FavoriteTile from "./FavoriteTile";
import uhoh from "./img/uh-oh.png";
import { useState, useEffect } from "react";
import { Divider } from "semantic-ui-react";

export default function Favorites() {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		fetch("/api/favorites").then((r) => {
			if (r.ok) {
				r.json().then((favorites) => setFavorites(favorites));
			}
		});
	}, []);

	const userFavorites = favorites.map((f) => {
		return (
			<FavoriteTile
				setFavorites={setFavorites}
				title={f.title}
				year={f.year}
				image={f.poster}
				imdb={f.imdb_id}
				id={f.id}
				key={"favorites" + f.imdb_id}
			/>
		);
	});

	return (
		<div className="content-container">
			<div id="favorites-header">
				<h1>Your Favorites</h1>
			</div>
			<Divider />
			{favorites.length < 1 ? (
				<>
					<h3>
						<i>
							<u>Uh-oh, looks like you don't have any favorites!</u>
						</i>
					</h3>
					<img src={uhoh} alt="uh-oh dog" />
				</>
			) : null}
			<div className="grid-container">{userFavorites}</div>
		</div>
	);
}
