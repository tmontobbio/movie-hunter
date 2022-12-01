import React from "react";
import logo from "./img/deer-logo.png";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Nav({ user, logout }) {
	return (
		<div id="nav-bar">
			<div id="nav-left">
				<Link to="/">
					<img src={logo} alt="logo-nav" />
				</Link>
			</div>

			<div id="nav-middle">
				<Link to="/">
					<Button basic inverted color="pink">
						Home
					</Button>
				</Link>
				<Link to="/search">
					<Button basic inverted color="pink">
						Search
					</Button>
				</Link>
				<Link to="/favorites">
					<Button basic inverted color="pink">
						Favorites
					</Button>
				</Link>
				<Button basic inverted color="red" onClick={logout}>
					Log-out
				</Button>
			</div>
			<div id="nav-right">
				<img src={user.avatar} alt="avatar-nav" />
			</div>
		</div>
	);
}
