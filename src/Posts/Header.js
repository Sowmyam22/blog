import React from "react";

function Header() {
	const buttonSpacing = {
		marginLeft: '20px',
		marginRight: '20px',
	};

	return (
		<div>
			<button className="header-button" style={buttonSpacing}>New Post</button>
			<button className="header-button">Published</button>
		</div>
	)
}

export default Header;