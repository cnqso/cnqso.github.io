/** @format */

import { useState, createContext } from "react";
import NavButton from "./NavButton";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export type PageContextType = "Home" | "Projects" | "Blog" | "Hire Me" | "Contact";
export const PageContext = createContext<PageContextType>("Home");
function NavBar({toggleTheme}: {toggleTheme: () => void}) {
	const [selected, setSelected] = useState<PageContextType>("Home");
	const location = useLocation().pathname.replace("%20", " ");
	console.log(location);
	const resumeTitle = location === "/Hire Me/" ? true : false;
	return (
		<>
			{resumeTitle ? null : <motion.h1 layout layoutId="title" onClick={toggleTheme} style={{cursor: "pointer"}}>William Kelly</motion.h1>}

			<motion.div layout className='NavBar'>
				<PageContext.Provider value={selected}>
					<NavButton key='Home' destination='Home' />
					<NavButton key='Projects' destination='Projects' />
					<NavButton key='Blog' destination='Blog' />
					<NavButton key='Hire Me' destination='Hire Me' />
					<NavButton key='Contact' destination='Contact' />
				</PageContext.Provider>
			</motion.div>
			{resumeTitle ? <motion.h1 layout layoutId="title" onClick={toggleTheme} style={{cursor: "pointer"}}>William Kelly</motion.h1> : null}
		</>
	);
}

export default NavBar;
