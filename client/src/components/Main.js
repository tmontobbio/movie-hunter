import Nav from "./Nav";
import Search from "./Search";
import Home from "./Home";
import Favorites from "./Favorites";
import Details from "./Details";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

export default function Main({ setUser, user, addFollowed, removeFollowed }) {
	return (
		<>
			<Nav setUser={setUser} user={user} />
			<div id="content-container">
				<Routes>
					<Route
						path="/"
						element={
							<Home
								user={user}
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
