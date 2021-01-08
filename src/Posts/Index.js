import React, { useState, useEffect } from "react";
import SearchBarComponent from "../components/SearchBar";
import Header from "./Header";
import PostForm from "./PostForm";
import PublishedPosts from "./PublishedPosts";

function Index() {
	const [selectedOption, setSelectedOption] = useState("post-form");
	const [publishedPosts, setPublishedPosts] = useState([]);

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
					<PostForm setPublishedPosts={setPublishedPosts} />
				</div>
			) : (
				<div className="form-wrapper">
					<PublishedPosts allPosts={publishedPosts} />
				</div>
			)}
		</div>
	);
}

export default Index;
