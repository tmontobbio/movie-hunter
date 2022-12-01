export default function Comment({ content, date, username }) {
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<div className="comment">
			<ul>
				<li>
					<h3>{capitalizeFirstLetter(username)}</h3>
				</li>
				<li>
					<p>{date}</p>
				</li>
				<li>{content}</li>
			</ul>
		</div>
	);
}
