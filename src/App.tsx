/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import HireMe from "./pages/HireMe";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [selected, setSelected] = useState("Home");
	//Reintegrate home into App.jsx
	// If home selected, send "home" to all components which will make them render small
	// If a page's name is selected, that app takes up the whole screen
	// If a page's name AND home are not selected, they are not shown
	// useEffect for animations on select and deselect
	return (
		<div className='App'>
			<Home />
			<Projects selected={true} />
		</div>
	);
}

export default App;
