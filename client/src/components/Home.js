import React from "react";
import UserTile from "./UserTile";
import FollowTile from "./FollowTile";
import UserFavoriteTile from "./UserFavoriteTile";
import { Button, Form } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { Divider } from "semantic-ui-react";

export default function Home({ user, addFollowed, removeFollowed, logout }) {
	const [formVisible, setFormVisible] = useState(false);
	const [activeFavorites, setActiveFavorites] = useState([]);
	const [username, setUsername] = useState(user.username);
	const [avatar, setAvatar] = useState(user.avatar);
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [users, setUsers] = useState([]);
	const [errors, setErrors] = useState([]);
	const userList = [];
	const followList = [];

	useEffect(() => {
		fetch("/api/users").then((r) => {
			if (r.ok) {
				r.json().then((users) => setUsers(users));
			}
			setActiveFavorites([]);
		});
	}, []);

	function updateUser(e) {
		e.preventDefault();
		fetch(`/api/users/${user.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username.toLowerCase(),
				avatar: avatar,
				password: password,
				password_confirmation: passwordConfirmation,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json();
			} else {
				r.json().then((r) => setErrors(r.errors));
			}
		});
		setFormVisible(false);
		logout();
	}

	users.forEach((u) => {
		if (user.users_followed.some((f) => f.id === u.id)) {
			followList.push(
				<FollowTile
					key={"user" + u.id}
					username={u.username}
					avatar={u.avatar}
					id={u.id}
					removeFollowed={removeFollowed}
					setActiveFavorites={setActiveFavorites}
				/>
			);
		} else {
			userList.push(
				<UserTile
					key={"user" + u.id}
					username={u.username}
					avatar={u.avatar}
					id={u.id}
					addFollowed={addFollowed}
					setActiveFavorites={setActiveFavorites}
					u={u}
				/>
			);
		}
	});

	const userFavorites = activeFavorites.map((f) => {
		return (
			<UserFavoriteTile
				title={f.title}
				year={f.year}
				image={f.poster}
				imdb={f.imdb_id}
				key={"userFavorites" + f.imdb_id}
			/>
		);
	});
	return (
		<div>
			<div>
				<h1>Welcome {user.username}!</h1>
			</div>
			<Divider />
			<div id="home-top">
				<div id="home-img">
					<img src={user.avatar} alt="avatar" />
				</div>
				{errors ? (
					<div className="error-div">
						<ul>
							{errors.map((e) => {
								return <li key={Math.random() * Math.random()}>{e}</li>;
							})}
						</ul>
					</div>
				) : null}
				<Button
					className="form-btn"
					onClick={() => setFormVisible(!formVisible)}
				>
					Settings
				</Button>
				{formVisible ? (
					<div id="edit-form">
						<ul>
							<li>
								<h4>
									You must enter or change your password to edit these fields.
								</h4>
							</li>
							<li>
								<h4>You will also be logged out.</h4>
							</li>
						</ul>

						<Form onSubmit={updateUser}>
							<Form.Field>
								<input
									placeholder="Username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</Form.Field>
							<Form.Field>
								<input
									placeholder="Avatar Image URL"
									value={avatar}
									onChange={(e) => setAvatar(e.target.value)}
								/>
							</Form.Field>
							<Form.Field>
								<input
									placeholder="New Password - 6-20 Characters"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									type="password"
								/>
							</Form.Field>
							<Form.Field>
								<input
									placeholder="Confirm Password"
									value={passwordConfirmation}
									onChange={(e) => setPasswordConfirmation(e.target.value)}
									type="password"
								/>
							</Form.Field>
							<Button className="form-btn" type="submit">
								Submit
							</Button>
						</Form>
					</div>
				) : null}
				<h4>Click a user's avatar to see their favorite movies!</h4>
				<Divider />
			</div>
			<div id="home-middle">
				<div id="home-left">
					<b>Users</b>
					<Divider />
					<div className="user-list">
						<h3>{userList}</h3>
					</div>
				</div>
				<div id="home-right">
					<b>Following</b>
					<Divider />
					<div className="user-list">
						<h3>{followList}</h3>
					</div>
				</div>
			</div>

			{activeFavorites.length > 0 ? (
				<div id="user-favorites-header">
					<h1>User's favorites:</h1>
				</div>
			) : null}

			<div id="home-bottom" className="grid-container">
				{userFavorites}
			</div>
		</div>
	);
}
