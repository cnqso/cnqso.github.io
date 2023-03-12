/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import "./styles/Blog.css";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { BlogHome, BlogPosts } from "./BlogPosts";

function Blog() {
	const [count, setCount] = useState(0);

	return (
		<div className='container Blog'>
			<Link to={"/Blog/"}>
				<h1>Blog</h1>
			</Link>
			<Routes>
				<Route index element={<BlogHome />} />
				<Route path='/' element={<BlogHome />} />
				{BlogPosts.map((post) => {
					return <Route path={post.path} element={post.post()} />;
				})}
			</Routes>

		</div>
	);
}

export default Blog;
