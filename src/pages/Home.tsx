/** @format */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import { projectObject } from "./Projects";
import { datedPosts } from "./Blog";
import { BlogPosts } from "./BlogPosts";
import type { BlogPost } from "./BlogPosts";
import NavButton from "../components/NavButton";

function Home() {
	const projectKeys = Object.keys(projectObject).slice(0, 3);
	const sortedBlog = BlogPosts.sort(function (a: BlogPost, b: BlogPost) {
		return b.date.getTime() - a.date.getTime();
	}).slice(0, 5);
	// Intro blurb (I'm a programmer bla bla bla)
	// Links (maybe all of this can be shared with Hire Me, make it stay in place on that change)

	// Projects - basic list
	// Blog - basic list

	return (
		<div className='container Home' style={{ textAlign: "left" }}>
			<div className='blurb'>I am a programmer </div>

			<div className='resumeLinks'>
				<span className='resumeLink'>Github</span>
				<span className='resumeLink'>LinkedIn</span>
				<span className='resumeLink'>Contact</span>
			</div>
			<hr />
			<div className='homeTitle'>Recent projects</div>
			<div className='ProjectsPreview'>
				{projectKeys.map((key: string) => {
					return (
						<div>
							<Link
								to={projectObject[key].blogLink}
								className='card homeCard'
								style={{ padding: 5, textAlign: "center" }}>
								<img className='projectImg' src={projectObject[key].image} />
								{projectObject[key].title}
							</Link>
						</div>
					);
				})}
			</div>
			<br />
			<div className='homeTitle'>Recent posts</div>
			<div className='BlogPreview'>
				{sortedBlog.map((post: BlogPost) => {
					return (

							<Link
								to={"/Blog/post/" + post.path}
								className='homeCard'>
								<li style={{color: "#ccd"}} className='postTitle'>{post.title}</li>
							</Link>

					);
				})}
			</div>
			<br />
			<div className='homeTitle'>Links out of here</div>
			<div className='BlogPreview'>
			<Link
				to="https://www.google.com"
				className='homeCard'>
				<li style={{color: "#ccd"}} className='postTitle'>
					Rhizome page
				</li>
			</Link>
			<Link
				to="https://www.google.com"
				className='homeCard'>
				<li style={{color: "#ccd"}} className='postTitle'>
					Twitter
				</li>
			</Link>
			<Link
				to="https://www.google.com"
				className='homeCard'>
				<li style={{color: "#ccd"}} className='postTitle'>
					Letterboxd
				</li>
			</Link>
			<Link
				to="https://www.google.com"
				className='homeCard'>
				<li style={{color: "#ccd"}} className='postTitle'>
					Personal website
				</li>
			</Link>

			<Link
				to="https://www.google.com"
				className='homeCard'>
				<li style={{color: "#ccd"}} className='postTitle'>
					I have an unproduced podcast about economics and politics
				</li>
			</Link>
			<Link
				to="https://www.google.com"
				className='homeCard'>
				<li style={{color: "#ccd"}} className='postTitle'>
					I also have a produced podcast about soda
				</li>
			</Link>
			</div>
		</div>
	);
}

export default Home;
