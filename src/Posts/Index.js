import React from "react";
import SearchBarComponent from "../components/SearchBar";
import Header from "./Header";
import PostForm from "./PostForm";
import PublishedPosts from "./PublishedPosts";

function Index() {
	return (
		<div>
			<div className="search-bar-wrapper">
				<SearchBarComponent />
			</div>

			<div className="header-wrapper">
				<Header />
			</div>

			{/**  if button choosen === new post **/}
			<div className="form-wrapper">
				<PostForm />
			</div>

			{/**  if button choosen === published **/}
			<div className="form-wrapper">
				<PublishedPosts />
			</div>
		</div>
	)
}

export default Index;