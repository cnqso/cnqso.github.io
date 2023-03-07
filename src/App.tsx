/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<div></div>
			<h1>William Kelly</h1>
			<div className='card'>Projects</div>
			<div className='card'>Blog</div>
			<div className='card'>About</div>
			<div className='card'>Contact</div>
			<div className='card'>Resume</div>
			<div className='card'>More</div>
		</div>
	);
}

export default App;
