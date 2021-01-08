import React, { useState } from "react";
import SearchBarComponent from "../components/SearchBar";
import Header from "./Header";
import PostForm from "./PostForm";
import PublishedPosts from "./PublishedPosts";

function Index() {
	const [selectedOption, setSelectedOption] = useState("post-form");

	return (
		<div>
			<div className="search-bar-wrapper">
				<SearchBarComponent />
			</div>

			<div className="header-wrapper">
				<Header setSelectedOption={setSelectedOption} />
			</div>

			{selectedOption === "post-form" ? (
				<div className="form-wrapper">
					<PostForm />
				</div>
			) : (
				<div className="form-wrapper">
					<PublishedPosts />
				</div>
			)}
		</div>
	);
}

export default Index;
