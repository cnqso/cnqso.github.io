import { useState } from "react";

function Blog() {
	const [count, setCount] = useState(0);
	//mui grid
	return (
		<div className='Blog'>
			<div className='blogPost'>Projects</div>
			<div className='blogPost'>Blog</div>
			<div className='blogPost'>Contact</div>
			<div className='blogPost'>Hire Me</div>
		</div>
	);
}

export default Blog;
