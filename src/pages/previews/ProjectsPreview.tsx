import { useState } from "react";

function Projects() {
	const [count, setCount] = useState(0);
	//If selected == Projects, big mode. If selected !== projects, small mode.
	//Mui grid
	return (
		<div className='ProjectsPreview'>	
			<h2>Projects</h2>
			<div>Selected works</div>
			<div className='card' >Commons</div>
			<div className='card'>WordleViewer</div>
			<div className='card' >Spirals</div>
			<div className='card'>DeadInternet.net</div>
			<div className='card'>Reverse RSS</div>
		</div>
	);
}

export default Projects;
