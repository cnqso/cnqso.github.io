import { useState } from "react";
import "./styles/HireMe.css";
import { motion } from "framer-motion";

function HireMe() {
	const [count, setCount] = useState(0);

	return (
		<motion.div
		className="container HireMe"
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

export default HireMe;
