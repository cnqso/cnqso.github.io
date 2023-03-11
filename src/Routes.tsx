/** @format */

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import HireMe from "./pages/HireMe";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import {BlogHome, BlogPosts} from "./pages/BlogPosts";

function MainRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence mode='wait'>
			<Routes location={location}>
				<Route key="/" path='/' element={<Home />} />
				<Route key="/home" path='/home' element={<Home />} />
				<Route key="/projects" path='/projects' element={<Projects />} />
				<Route key="/Blog" path='/Blog/*' element={<Blog/>}/>
				<Route key="Hire Me" path='/Hire Me' element={<HireMe />} />
				<Route key="/Contact" path='/Contact' element={<Contact />} />
			</Routes>
		</AnimatePresence>
	);
}

export {MainRoutes};
