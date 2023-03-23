/** @format */

import { useState, createContext } from "react";
import NavButton from "./components/NavButton";
import NavBar from "./components/NavBar";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import HireMe from "./pages/HireMe";
import Contact from "./pages/previews/Contact"
import { useLocation, BrowserRouter as Router } from "react-router-dom";
import {MainRoutes} from "./Routes";
import { motion } from "framer-motion";
import "./App.css";

export type PageContextType = "Home" | "Projects" | "Blog" | "Hire Me" | "Contact";
export type technologies = "Javascript" | "Python" | "React" | "Typescript" | "GCP" | "OpenAI APIs" | "NoSQL" | "Firebase" | "Node" | "Material UI" | "NLP";

export const PageContext = createContext<PageContextType>("Home");

function App() {


	//React router might be needed
	
	//Reintegrate home into App.jsx
	// If home selected, send "home" to all components which will make them render small
	// If a page's name is selected, that app takes up the whole screen
	// If a page's name AND home are not selected, they are not shown
	// useEffect for animations on select and deselect
	return (
		<div className='App'>
		<Router>
			<NavBar />

			<MainRoutes/>
			
		</Router>
		</div>
	);
}

export default App;
