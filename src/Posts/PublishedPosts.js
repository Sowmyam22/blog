import React, { useEffect } from "react";

function PublishedPosts({ allPosts }) {
	return (
		<div
			style={{
				paddingTop: "15px",
				paddingBottom: "15px",
				paddingLeft: "300px",
				paddingRight: "300px",
			}}
		>
			{allPosts.map((post, index) => {
				return (
					<div className="post-card">
						<h3>{post.title}</h3>
						<p>{post.content}</p>
					</div>
				);
			})}
		</div>
	);
}

export default PublishedPosts;
