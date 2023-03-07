import { useState } from "react";
import "./styles/Projects.css";

function Projects({selected}: {selected:boolean}) {
	const [count, setCount] = useState(0);
	//If selected == Projects, big mode. If selected !== projects, small mode.
	return (
		<div className='Projects'>	
			{selected ? <h1> Projects </h1> : null}
		</div>
	);
}

export default Projects;
