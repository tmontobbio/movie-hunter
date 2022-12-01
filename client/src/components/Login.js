import { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser, setLoginError, hideErrors }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username: username.toLowerCase(), password }),
		}).then((r) => {
			if (r.ok) {
				r.json().then((user) => setUser(user));
			} else {
				r.json().then((error) => setLoginError(error.error));
			}
		});
		navigate("/");
		hideErrors();
	}

	return (
		<div className="splash-form">
			<Form onSubmit={handleSubmit}>
				<Form.Field>
					<input
						placeholder="Username"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
						type="password"
					/>
				</Form.Field>
				<Button type="submit">Submit</Button>
			</Form>
		</div>
	);
}
