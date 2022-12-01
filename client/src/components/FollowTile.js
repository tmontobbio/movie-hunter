import { Button } from "semantic-ui-react";

export default function FollowTile({
	setActiveFavorites,
	removeFollowed,
	username,
	avatar,
	id,
}) {
	function handleUnfollow() {
		fetch(`/api/follows/${id}`, { method: "DELETE" }).then(() =>
			removeFollowed(id)
		);
	}

	function showFavorites() {
		fetch(`/api/users/${id}`).then((r) => {
			if (r.ok) {
				r.json().then((data) => setActiveFavorites(data));
			}
		});
	}

	return (
		<div className="user-tile">
			<div>
				<img src={avatar} alt="avatar" onClick={showFavorites} />
			</div>
			<div className="username">{username}</div>
			<div className="follow-btn">
				<Button inverted color="red" onClick={handleUnfollow}>
					Unfollow
				</Button>
			</div>
		</div>
	);
}
