/** @format */

import ProjectsPreview from "./previews/ProjectsPreview";
import BlogPreview from "./previews/BlogPreview";
import Contact from "./previews/Contact";
import HireMePreview from "./previews/HireMePreview";
import { motion } from "framer-motion";
import "./styles/Home.css";

import NavButton from "../components/NavButton";

function Home() {




	return (
		<div className="container Home">
			<div></div>

			<ProjectsPreview />
		</div>
	);
}

export default Home;
