import React from "react";
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export default function Signup({ setUser, setErrors, hideErrors }) {
	const [avatar, setAvatar] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/api/signup", {
			method: "POST",
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
				r.json().then((user) => setUser(user));
				navigate("/");
			} else {
				r.json().then((r) => {
					setErrors(r.errors);
				});
			}
		});
		hideErrors();
	}

	return (
		<div className="splash-form">
			<Form onSubmit={handleSubmit}>
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
						placeholder="Password - 6-20 Characters"
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
				<Button type="submit">Submit</Button>
			</Form>
		</div>
	);
}
