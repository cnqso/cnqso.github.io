/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import "./styles/Blog.css";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { BlogPosts } from "./BlogPosts";

// Posts can be contained in a specific type of text block
// BlogHome is a list of all posts followed by an infinite scroll of posts.
// These might be best as snippets. Maybe show top comments
// BlogPost is a single post with comments and a comment box. Sidebar with list of posts

function BlogHome() {
	return (
			<h1>Blog</h1>
	);
}

function BlogPost() {
	return (

			<Routes>
				{BlogPosts.map((post) => {
					return <Route path={post.path} element={post.post()} key={post.title} />;
				})}
				<Route path='*' element={<h1>I never wrote anything with that title</h1>} />
			</Routes>
	);
}

function Blog() {


	const location = useLocation().pathname.replace("%20", " ").split("/")[3];
	const css = location !== undefined ? "BlogPost" : "BlogHome";
	const navCss = location !== undefined ? "blogNavPost" : "blogNavHome";
	return (
		<div className={css}>
			<div className={navCss}>
					{location !== undefined ? (<div className='blogPostBtnOuter' style={{marginTop: '9em'}}>
						<Link
							className = "blogPostBtnInner"
							to={"/Blog/"}
							key={'Back'}
							style={{ color: "white" }}>
							
							Back
						</Link>
						</div>) : null}
				{BlogPosts.map((post) => {
					return (
						<motion.div layout className='blogPostBtnOuter'>
						<Link
							className = "blogPostBtnInner"
							to={"post/" + post.path}
							key={post.title}
							
							style={`${location}` === `${post.path}` ? { color: "#b3b3ff" } : { color: "white" }}>
							{post.title}
						</Link>
						</motion.div>
					);
				})}
			</div>
			<Routes>
				<Route index element={<BlogHome />} />
				<Route path={"post/*"} element={<BlogPost />} />;
			</Routes>
		</div>
	);
}

export default Blog;
