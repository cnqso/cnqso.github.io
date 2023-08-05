/** @format */

import { useState, createContext } from "react";
import NavButton from "./NavButton";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export type PageContextType = "" | "Projects" | "Blog" | "Hire Me" | "Contact";
export const PageContext = createContext<PageContextType>("");
function NavBar({toggleTheme}: {toggleTheme: () => void}) {
	const [selected, setSelected] = useState<PageContextType>("");
	const location = useLocation().pathname.replace("%20", " ");
	const resumeTitle = location === "/Hire Me/" ? true : false;
	return (
		<>
			{resumeTitle ? null : <motion.h1 layout layoutId="title" onClick={toggleTheme} style={{cursor: "pointer"}}>William Kelly</motion.h1>}

			<motion.div layout className='NavBar'>
				<PageContext.Provider value={selected}>
					<NavButton key='' destination='' />
					<NavButton key='Projects' destination='Projects' />
					<NavButton key='Blog' destination='Blog' />
					<NavButton key='Hire Me' destination='Hire Me' />
				</PageContext.Provider>
			</motion.div>
			{resumeTitle ? <motion.h1 layout layoutId="title" onClick={toggleTheme} style={{cursor: "pointer"}}>William Kelly</motion.h1> : null}
		</>
	);
}

export default NavBar;
