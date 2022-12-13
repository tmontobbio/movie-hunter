import React from "react";
import { useState, useEffect } from "react";
import Splash from "./Splash";
import Main from "./Main";
import "./App.css";

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch("/api/me").then((r) => {
			if (r.ok) {
				r.json().then((user) => setUser(user));
			}
		});
	}, []);

	const addFollowed = (followed) =>
		setUser((user) => ({
			...user,
			users_followed: [...user.users_followed, followed],
		}));

	const removeFollowed = (id) =>
		setUser((user) => ({
			...user,
			users_followed: user.users_followed.filter((f) => f.id !== id),
		}));

	return (
		<div id="app">
			{user ? (
				<Main
					setUser={setUser}
					user={user}
					addFollowed={addFollowed}
					removeFollowed={removeFollowed}
				/>
			) : (
				<Splash setUser={setUser} />
			)}
		</div>
	);
}

export default App;
