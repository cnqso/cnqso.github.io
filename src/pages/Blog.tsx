import { useState } from "react";
import "./styles/Blog.css";

function Blog() {
	const [count, setCount] = useState(0);

	return (
		<div className='Blog'>
			<div></div>
			<h1>William Kelly</h1>
			<div className='card'>Projects</div>
			<div className='card'>Blog</div>
			<div className='card'>Contact</div>
			<div className='card'>Hire Me</div>
		</div>
	);
}

export default Blog;
