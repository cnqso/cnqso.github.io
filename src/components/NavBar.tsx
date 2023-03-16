/** @format */

import { useState, createContext } from "react";
import NavButton from "./NavButton";
import reactLogo from "./assets/react.svg";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Blog from "../pages/Blog";
import HireMe from "../pages/HireMe";
import Contact from "../pages/previews/Contact";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export type PageContextType = "Home" | "Projects" | "Blog" | "Hire Me" | "Contact";
export const PageContext = createContext<PageContextType>("Home");
function NavBar() {
	const [selected, setSelected] = useState<PageContextType>("Home");
	const location = useLocation().pathname.replace("%20", " ");
	console.log(location);
	const resumeTitle = location === "/Hire Me/" ? true : false;
	return (
		<>
			{resumeTitle ? null : <motion.h1 layout layoutId="title">William Kelly</motion.h1>}

			<motion.div layout className='NavBar'>
				<PageContext.Provider value={selected}>
					<NavButton key='Home' destination='Home' />
					<NavButton key='Projects' destination='Projects' />
					<NavButton key='Blog' destination='Blog' />
					<NavButton key='Hire Me' destination='Hire Me' />
					<NavButton key='Contact' destination='Contact' />
				</PageContext.Provider>
			</motion.div>
			{resumeTitle ? <motion.h1 layout layoutId="title">William Kelly</motion.h1> : null}
		</>
	);
}

export default NavBar;
