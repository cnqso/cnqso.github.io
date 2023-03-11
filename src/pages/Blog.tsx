/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import "./styles/Blog.css";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { BlogHome, BlogPosts } from "./BlogPosts";

function Blog() {
	const [count, setCount] = useState(0);

	return (
		<motion.div
			className='container Blog'
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -300, opacity: 0 }}
			transition={{ duration: 0.25 }}>
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

		</motion.div>
	);
}

export default Blog;
