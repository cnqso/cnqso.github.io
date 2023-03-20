/** @format */

import ProjectsPreview from "./previews/ProjectsPreview";
import BlogPreview from "./previews/BlogPreview";
import Contact from "./previews/Contact";
import HireMePreview from "./previews/HireMePreview";
import { motion } from "framer-motion";
import "./styles/Home.css";

import NavButton from "../components/NavButton";

function Home() {

// Intro blurb (I'm a programmer bla bla bla)
// Links (maybe all of this can be shared with Hire Me, make it stay in place on that change)

// Projects - basic list
// Blog - basic list


	return (
		<div className="container Home">
			<div></div>

			<ProjectsPreview />
		</div>
	);
}

export default Home;
