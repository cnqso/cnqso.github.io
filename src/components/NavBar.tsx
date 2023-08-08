/** @format */

import { useState, createContext } from "react";
import NavButton from "./NavButton";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export type PageContextType = "" | "Projects" | "Blog" | "Hire Me" | "Contact";
export const PageContext = createContext<PageContextType>("");
function NavBar({toggleTheme}: {toggleTheme: () => void}) {
	const loc = useLocation().pathname.replace("%20", " ");
	const resumeTitle = loc === "/Hire Me" ? true : false;



	return (
		<>
			{resumeTitle ? null : <motion.h1 layout layoutId="title" onClick={toggleTheme} style={{cursor: "pointer"}}>William Kelly</motion.h1>}

			<motion.div layout className='NavBar'>
					<NavButton destination='' />
					<NavButton destination='Projects' />
					<NavButton destination='Blog' />
					<NavButton destination='Hire Me' />
			</motion.div>
			{resumeTitle ? <motion.h1 layout layoutId="title" onClick={toggleTheme} style={{cursor: "pointer"}}>William Kelly</motion.h1> : null}
		</>
	);
}

export default NavBar;
