import { useState } from "react";

function Contact() {
	const [count, setCount] = useState(0);

	return (
		<div className='Contact'>
			<div></div>
			<h1>William Kelly</h1>
			<div className='card'>Projects</div>
			<div className='card'>Blog</div>
			<div className='card'>Contact</div>
			<div className='card'>Hire Me</div>
		</div>
	);
}

export default Contact;
