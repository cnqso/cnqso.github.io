/** @format */

import ProjectsPreview from "./previews/ProjectsPreview";
import BlogPreview from "./previews/BlogPreview";
import Contact from "./previews/Contact";
import HireMePreview from "./previews/HireMePreview";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import {projectObject} from "./Projects";
import { datedPosts } from "./Blog";
import {BlogPosts} from "./BlogPosts";
import type {BlogPost} from "./BlogPosts";
import NavButton from "../components/NavButton";

function Home() {

	const projectKeys = Object.keys(projectObject);
	const sortedBlog = 	BlogPosts.sort(function (a: BlogPost, b: BlogPost) {
		return b.date.getTime() - a.date.getTime();
	});
	// Intro blurb (I'm a programmer bla bla bla)
	// Links (maybe all of this can be shared with Hire Me, make it stay in place on that change)

	// Projects - basic list
	// Blog - basic list

	return (
		<div className='container Home'>
			<div className='blurb'>I am a programmer </div>

			<div className='resumeLinks'>
				<span className='resumeLink'>Github</span>
				<span className='resumeLink'>LinkedIn</span>
				<span className='resumeLink'>Contact</span>
			</div>
			<hr />

			<ul className='ProjectsPreview'>
				{projectKeys.map((key: string) => {
					return <li><Link to={projectObject[key].blogLink} className='card' style={{padding:0}}>
					{projectObject[key].title}
			   </Link></li>
				})}
			</ul>
			<ul className='ProjectsPreview'>
				{sortedBlog.map((post: BlogPost) => {
					console.log(post.path)
					return <li><Link to={post.path} className='card' style={{padding:0}}>
					{post.title}
			   </Link></li>
				})}
			</ul>

		</div>
	);
}

export default Home;
