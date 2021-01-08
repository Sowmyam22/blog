import React from "react";

function SearchBar() {
	return (
		<div className="search-container">
			<input
				className="search-input"
				type="text"
				placeholder="Search.."
				name="search"
			/>
			<button type="submit" className="search-clear">
				<svg
					width="20"
					height="24"
					h
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>
		</div>
	);
}

export default SearchBar;
