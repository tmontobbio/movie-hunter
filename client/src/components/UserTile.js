import React from "react";
import { Button } from "semantic-ui-react";

export default function UserTile({
	setActiveFavorites,
	addFollowed,
	username,
	avatar,
	id,
	u,
}) {
	function handleFollow() {
		fetch("/api/follows", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				followed_id: id,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((_newFollow) => addFollowed(u));
			}
		});
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
				<Button inverted color="green" onClick={handleFollow}>
					Follow
				</Button>
			</div>
		</div>
	);
}
