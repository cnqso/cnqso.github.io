/** @format */

import ProjectsPreview from "./previews/ProjectsPreview";
import BlogPreview from "./previews/BlogPreview";
import HireMePreview from "./previews/HireMePreview";
import { motion } from "framer-motion";
import "./styles/Home.css";

import NavButton from "../components/NavButton";

function Contact() {




	return (
		<motion.div
		className="container Contact"
		initial={{ x: 300, opacity: 0 }}
		animate={{ x: 0, opacity: 1 }}
		exit={{ x: -300, opacity: 0 }}
		transition={{ duration: 0.25 }}	  >
			<div></div>

			<ProjectsPreview />
		</motion.div>
	);
}

export default Contact;
