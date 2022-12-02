import React from "react";
import Nav from "./Nav";
import Search from "./Search";
import Home from "./Home";
import Favorites from "./Favorites";
import Details from "./Details";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

export default function Main({ setUser, user, addFollowed, removeFollowed }) {
	function logout() {
		fetch("/api/logout", { method: "DELETE" }).then((r) => {
			if (r.ok) {
				setUser(null);
			}
		});
	}

	return (
		<>
			<Nav setUser={setUser} user={user} logout={logout} />
			<div id="content-container">
				<Routes>
					<Route
						path="/"
						element={
							<Home
								logout={logout}
								user={user}
								setUser={setUser}
								addFollowed={addFollowed}
								removeFollowed={removeFollowed}
							/>
						}
					/>
					<Route path="/search" element={<Search />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/details/:imdb" element={<Details user={user} />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}
