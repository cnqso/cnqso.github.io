import { useState } from "react";
import { motion } from "framer-motion";
import "./styles/Blog.css";

function Blog() {
	const [count, setCount] = useState(0);

	return (
		<motion.div
		className="container Blog"
		initial={{ x: 300, opacity: 0 }}
		animate={{ x: 0, opacity: 1 }}
		exit={{ x: -300, opacity: 0 }}
		transition={{ duration: 0.25 }}	  >
			<div></div>
			<h1>William Kelly</h1>
			<div className='card'>Projects</div>
			<div className='card'>Blog</div>
			<div className='card'>Contact</div>
			<div className='card'>Hire Me</div>
		</motion.div>
	);
}

export default Blog;
