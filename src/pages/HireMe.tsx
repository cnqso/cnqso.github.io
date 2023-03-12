import { useState } from "react";
import "./styles/HireMe.css";
import { motion } from "framer-motion";

function HireMe() {
	const [count, setCount] = useState(0);

	return (
		<div className="container HireMe">
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
