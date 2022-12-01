import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Button } from "semantic-ui-react";
import { useState } from "react";
import logo from "./img/deer-logo.png";

export default function Splash({ setUser }) {
	const [option, setOption] = useState(null);
	const [errors, setErrors] = useState([]);
	const [loginError, setLoginError] = useState("");

	const formOptions = {
		login: (
			<Login
				hideErrors={hideErrors}
				setUser={setUser}
				setLoginError={setLoginError}
			/>
		),
		signup: (
			<Signup
				hideErrors={hideErrors}
				setOption={setOption}
				setErrors={setErrors}
				setUser={setUser}
			/>
		),
	};

	function hideErrors() {
		setTimeout(() => {
			setLoginError("");
		}, 3000);
		setTimeout(() => {
			setErrors("");
		}, 4000);
	}

	return (
		<>
			<div id="splash-container">
				<img src={logo} alt="logo" />
				<div id="form-container">{formOptions[option]}</div>
				<Button.Group id="login-buttons" size="large">
					<Button
						onClick={() => {
							setOption("login");
							setErrors([]);
							setLoginError("");
						}}
					>
						Log-in
					</Button>
					<Button.Or />
					<Button
						onClick={() => {
							setOption("signup");
							setErrors([]);
							setLoginError("");
						}}
					>
						Sign-up
					</Button>
				</Button.Group>
			</div>
			{loginError ? (
				<div id="error-div-log">
					<ul>
						<li>{loginError}</li>
					</ul>
				</div>
			) : null}
			{errors.length > 0 ? (
				<div id="error-div-sign">
					<ul>
						{errors.map((e) => {
							return <li key={Math.random()}>{e}</li>;
						})}
					</ul>
				</div>
			) : null}
		</>
	);
}
