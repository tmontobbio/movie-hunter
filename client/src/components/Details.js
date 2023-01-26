import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Divider } from "semantic-ui-react";
import CommentForm from "./CommentForm";
import imdbLogo from "./img/imdb.png";
import favorite from "./img/favorite.png";
import Comment from "./Comment";

export default function Details({ user }) {
	const [movieDetails, setMovieDetails] = useState({});
	const [comments, setComments] = useState([]);
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();
	const { imdb } = useParams();
	let movieComments = [];
	const {
		title,
		year,
		rated,
		released,
		runtime,
		genre,
		director,
		writer,
		actors,
		summary,
		language,
		country,
		awards,
		poster,
		metascore,
		imdb_rating,
		imdb_votes,
	} = movieDetails;

	useEffect(() => {
		if (imdb) {
			fetch(`/api/movies/${imdb}`).then((r) => {
				r.json().then((data) => {
					setMovieDetails(data);
					setComments(data.comments);
				});
			});
		}
	}, [imdb]);

	function handleLike() {
		fetch("/api/favorites", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				movie_id: movieDetails.id,
				user_id: user.id,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json();
			}
		});
		navigate("/search");
	}

	if (movieDetails.comments) {
		movieComments = comments.map((c) => {
			return (
				<Comment
					content={c.content}
					username={c.user.username}
					date={c.created_at}
					key={"comment" + c.id}
				/>
			);
		});
	}

	return (
		<div id="details-container">
			<div id="detail-image-container">
				<img src={poster} id="detail-image" alt="poster" />
			</div>
			<div id="detail-right-container">
				<h1>{title}</h1>
				<h2>{year}</h2>
				<h3>
					IMDB Rating&nbsp;{imdb_rating} | Votes&nbsp;{imdb_votes}
				</h3>
				<h3>Metascore: {metascore}</h3>
				<br />
				<div id="detail-buttons">
					<a href={"https://www.imdb.com/title/" + imdb}>
						<img src={imdbLogo} alt="imdb-logo" className="icon" />
					</a>
					<img
						src={favorite}
						alt="favorite-btn"
						className="icon"
						onClick={() => handleLike()}
					/>
				</div>
				<ul>
					<li>
						<b>Runtime</b> <br />
						{runtime}
					</li>
					<li>
						<b>Written by</b>
						<br />
						{writer}
					</li>
					<li>
						<b>Top billed cast</b>
						<br />
						{actors}
					</li>
					<li>
						<b>Language(s)</b>
						<br />
						{language}
					</li>
					<li>
						<b>Awards</b>
						<br />
						{awards}
					</li>
				</ul>
			</div>
			<div id="detail-bottom-container">
				<p>{summary}</p>
				<p>
					{title} was released on {released}, and is rated {rated}. {director}{" "}
					directs this {genre} - originally released in {country}.
				</p>
			</div>
			<div id="user-comments">
				<Divider></Divider>
				<h1>User Reviews</h1>
				<Button onClick={() => setVisible(true)} color="yellow">
					New Review
				</Button>
				{visible ? (
					<CommentForm
						setVisible={setVisible}
						user={user}
						movieDetails={movieDetails}
						comments={comments}
						setComments={setComments}
					/>
				) : null}
				{movieComments}
			</div>
		</div>
	);
}
