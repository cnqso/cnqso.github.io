/** @format */

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import HireMe from "./pages/HireMe";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence mode='wait'>
			<Routes key={location.pathname} location={location}>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/Hire Me' element={<HireMe />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
