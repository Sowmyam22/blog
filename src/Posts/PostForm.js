import React, { useState, useEffect } from "react";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import ButtonComponent from "../components/Button";

function PostForm({ setPublishedPosts }) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const [allPosts, setAllPosts] = useState([]);

	const handleTitle = (val) => {
		setTitle(val);
	};

	const handleContent = (val) => {
		setContent(val);
	};

	const handleSubmit = () => {
		let payload = {
			title: title,
			content: content,
		};

		allPosts.push(payload);
		setAllPosts(allPosts);
		setPublishedPosts(allPosts);
	};

	return (
		<div>
			<TextInput label="Title" onChange={handleTitle} value={title} />
			<TextArea label="Content" onChange={handleContent} value={content} />

			<ButtonComponent name="Save Post" onClick={handleSubmit} />
		</div>
	);
}

export default PostForm;
