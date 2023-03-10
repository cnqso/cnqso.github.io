
import { useState, createContext } from "react";
import NavButton from "./NavButton";
import reactLogo from "./assets/react.svg";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Blog from "../pages/Blog";
import HireMe from "../pages/HireMe";
import Contact from "../pages/previews/Contact"

export type PageContextType = "Home" | "Projects" | "Blog" | "Hire Me" | "Contact";
export const PageContext = createContext<PageContextType>("Home");  
function NavBar() {
    const [selected, setSelected] = useState<PageContextType>("Home");

	return (
        <>
		<h1>William Kelly</h1>
			
				<div className='Nav'>
				<PageContext.Provider value={selected}>
					<NavButton set={setSelected} destination='Home' />
					<NavButton set={setSelected} destination='Projects' />
					<NavButton set={setSelected} destination='Blog' />
					<NavButton set={setSelected} destination='Hire Me' />
					<NavButton set={setSelected} destination='Contact' />
					</PageContext.Provider>
				</div>
                </>

	);
}

export default NavBar;


