import SearchTile from "./SearchTile";
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

	const searchTiles = movies.map((m) => {
		return (
			<SearchTile
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
					<br />
					<div className="error-div">{error ? error : null}</div>
					<Input
						fluid
						icon="search"
						placeholder="Search..."
						onChange={(e) => setInput(e.target.value)}
						value={input}
					/>
					<Button type="submit" value="search">
						Search
					</Button>
					<Divider />
					<h2>Users liked...</h2>
				</form>
			</div>
			<div id="search-results-container" className="grid-container">
				{searchTiles}
			</div>
		</div>
	);
}
