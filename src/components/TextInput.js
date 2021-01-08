import React from "react";

function TextInput({ label, onChange, value }) {
	const handleInput = (e) => {
		onChange(e.target.value);
	};

	return (
		<div>
			<label htmlFor={label}>{label}:</label>
			<br />
			<input type="text" value={value} onChange={(e) => handleInput(e)} />
			<br />
		</div>
	);
}

export default TextInput;
