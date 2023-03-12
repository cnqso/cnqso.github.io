/** @format */

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import HireMe from "./pages/HireMe";
import Contact from "./pages/Contact";
import { motion, AnimatePresence } from "framer-motion";


function Page({ node } : {node: React.ReactNode}) {
		return (
			<motion.div
				className="container"
				initial={{ x: 300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: -300, opacity: 0 }}
				transition={{ ease: "easeOut", duration: 0.4 }}
			>
				{node}
			</motion.div>
		);
}


function MainRoutes() {
	const location = useLocation();
	const broadLocation = location.pathname.split("/")[1];
	return (
		<AnimatePresence initial={false} mode='wait'>
			<Routes location={location} key={broadLocation}>
				<Route  path='/' element={<Page node={Home()} />} />
				<Route  path='/home' element={<Page node={Home()} />} />
				<Route  path='/projects' element={<Page node={Projects()} />} />
				<Route  path='/Blog/*' element={<Page node={Blog()} />}/>
				<Route  path='/Hire Me' element={<Page node={HireMe()} />} />
				<Route  path='/Contact' element={<Page node={Contact()} />} />
			</Routes>
		</AnimatePresence>
	);
}

export {MainRoutes};
