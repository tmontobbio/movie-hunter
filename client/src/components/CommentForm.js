import { Button, Form } from "semantic-ui-react";
import { useState } from "react";

export default function CommentForm({
	setVisible,
	user,
	movieDetails,
	comments,
	setComments,
}) {
	const [content, setContent] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		fetch("/api/comments", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user_id: user.id,
				movie_id: movieDetails.id,
				content: content,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((comment) => setComments([...comments, comment]));
			}
		});
		setVisible(false);
	}

	return (
		<div id="comment-form">
			<Form onSubmit={handleSubmit}>
				<Form.Field>
					<textarea
						placeholder="Thoughts?"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</Form.Field>
				<Button color="green" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}
