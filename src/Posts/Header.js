import React from "react";
import ButtonComponent from "../components/Button.js";

function Header({ setSelectedOption }) {
	const buttonSpacing = {
		marginLeft: "20px",
		marginRight: "20px",
	};

	const handlePostForm = (type) => {
		setSelectedOption(type);
	};

	const handlePublishedPosts = (type) => {
		setSelectedOption(type);
	};

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<ButtonComponent
				name="New Post"
				buttonStyles={buttonSpacing}
				onClick={handlePostForm}
				buttonType="post-form"
			/>
			<ButtonComponent
				name="Published"
				buttonStyles={buttonSpacing}
				onClick={handlePublishedPosts}
				buttonType="published"
			/>
		</div>
	);
}

export default Header;
