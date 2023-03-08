import { useState } from "react";

function HireMe() {
	const [count, setCount] = useState(0);
	//use template
	return (
		<div className='HireMe'>
			<div></div>
			<h1>William Kelly</h1>
			<div className='card'>Projects</div>
			<div className='card'>Blog</div>
			<div className='card'>Contact</div>
			<div className='card'>Hire Me</div>
		</div>
	);
}

export default HireMe;
