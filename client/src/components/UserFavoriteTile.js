import { Divider } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export default function UserFavoriteTile({ title, year, image, imdb }) {
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
			<img src={image} alt="user-follow-img" onClick={queryDetails} />
		</div>
	);
}
