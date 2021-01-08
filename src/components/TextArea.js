import React from "react";

function TextArea({ label, onChange, value }) {
	const handleInput = (e) => {
		onChange(e.target.value);
	};

	return (
		<div>
			<label htmlFor={label}>{label}:</label>
			<br />
			<textarea
				name="w3review"
				rows="4"
				value={value}
				onChange={(e) => handleInput(e)}
			></textarea>
			<br />
		</div>
	);
}

export default TextArea;
