import React from "react";
import logo from "./img/deer-logo.png";
import { Button, Icon } from "semantic-ui-react";
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
					<Button animated >
						<Button.Content visible>Home</Button.Content>
						<Button.Content hidden>
							<Icon name='home' />
						</Button.Content>
					</Button>
				</Link>
				<Link to="/search">
					<Button animated>
						<Button.Content visible>Search</Button.Content>
						<Button.Content hidden>
							<Icon name='video camera' />
						</Button.Content>
					</Button>
				</Link>
				<Link to="/favorites">
					<Button animated>
						<Button.Content visible>Favorites</Button.Content>
						<Button.Content hidden>
							<Icon name='heart' />
						</Button.Content>
					</Button>
				</Link>
				<Button animated onClick={logout}>
					<Button.Content visible>Log-out</Button.Content>
					<Button.Content hidden>
						<Icon name='log out' />
					</Button.Content>
				</Button>
			</div>
			<div id="nav-right">
				<img src={user.avatar} alt="avatar-nav" />
			</div>
		</div>
	);
}
