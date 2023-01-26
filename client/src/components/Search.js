import React from "react";
import MovieTile from "./MovieTile";
import { useState, useEffect } from "react";
import { Input, Button, Divider } from "semantic-ui-react";

export default function Search() {
	const [input, setInput] = useState("");
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		fetch("/api/movies").then((r) => {
			if (r.ok) {
				r.json().then((movies) => setMovies(movies));
			}
		});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(`https://www.omdbapi.com/?apikey=eea402bd&s=${input}&type=movie`)
			.then((r) => r.json())
			.then((data) => {
				if (data.Error) {
					setError(data.Error);
				} else {
					setError("");
					setMovies(
						data.Search.map((m) => {
							return {
								title: m.Title,
								year: m.Year,
								poster: m.Poster,
								imdb_id: m.imdbID,
							};
						})
					);
				}
			});
	};

	const movieTiles = movies.map((m) => {
		return (
			<MovieTile
				title={m.title}
				year={m.year}
				image={m.poster}
				imdb={m.imdb_id}
				key={"movieSearch" + m.imdb_id}
			/>
		);
	});

	return (
		<div className="content-container">
			<div>
				<form onSubmit={handleSubmit}>
					<h1>Search Movies</h1>
					<Divider className="divider" />
					<br />
					<div className="error-div">{error ? error : null}</div>
					<Input
						fluid
						className="form-field"
						placeholder="Search..."
						onChange={(e) => setInput(e.target.value)}
						value={input}
					/>
					<div className="spacer"></div>
					<Button className="button" type="submit" value="search">
						Search
					</Button>
					<div className="spacer"></div>
					<h2>Users liked...</h2>
					<Divider className="divider" />
				</form>
			</div>
			<div id="search-results-container" className="grid-container">
				{movieTiles}
			</div>
		</div>
	);
}
