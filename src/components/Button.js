import React from "react";

function Button({ name, buttonStyles, buttonType, onClick, submitForm }) {
	const handleSubmit = (type) => {
		onClick(type);
	};

	return (
		<div>
			<button
				className="header-button"
				type="submit"
				style={buttonStyles}
				onClick={() => handleSubmit(buttonType)}
			>
				{name}
			</button>
		</div>
	);
}

export default Button;
