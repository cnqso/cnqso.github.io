import { useState } from "react";
import "./styles/Home.css";

function Home() {
	const [count, setCount] = useState(0);
	const [selected, setSelected] = useState("Home");
	return (
		<div className='Home'>
			<div></div>
			<h1>William Kelly</h1>
			<div className='card' >Projects</div>
			<div className='card'>Blog</div>
			<div className='card'>Contact</div>
			<div className='card'>Hire Me</div>
		</div>
	);
}

export default Home;
