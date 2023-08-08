/** @format */
import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import type { PostPreview, Project} from "../types";
import NavButton from "../components/NavButton";
import {sanityClient, urlFor} from "../client";
import { SanityContext} from "../App";

function Home() {
	const data = useContext(SanityContext);
	const recentPosts = data?.posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 3);
	const recentProjects = data?.projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
	const resume = data?.resume
	// Intro blurb (I'm a programmer bla bla bla)
	// Links (maybe all of this can be shared with Hire Me, make it stay in place on that change)

	// Projects - basic list
	// Blog - basic list

	return (
		<div className='container Home' style={{ textAlign: "left" }}>
			<div className='blurb'>I am a programmer </div>

			<div className='resumeLinks'>
				<span className='resumeLink fancyLink'>
					<a href={resume?.github} target='_blank'>
						Github
					</a>
				</span>
				<span className='resumeLink fancyLink'>
					<a href={resume?.linkedin} target='_blank'>
						LinkedIn
					</a>
				</span>
				<span className='resumeLink fancyLink'>
					<a href={resume?.contact} target='_blank'>
						Contact
					</a>
				</span>
			</div>
			<hr />
			<div className='homeTitle'>Recent projects</div>
			<div className='ProjectsPreview'>
				{recentProjects?.map((project: Project) => {
					return (
						<div key={project.title}>
							<a
							
								href={project?.blogLink}
								className='card homeCard'
								style={{ padding: 5, textAlign: "center" }}>
								<img className='projectImg' src={urlFor(project.image).url()} />
								{project.title}
							</a>
						</div>
					);
				})}
			</div>
			<br />
			<div className='homeTitle'>Recent posts</div>
			<div className='BlogPreview'>
				{recentPosts?.map((post: PostPreview) => {
					return (
						<Link key={post.title} to={"/Blog/post/" + post.slug.current} className='homeCard'>
							<li className='postTitle'>{post.title}</li>
						</Link>
					);
				})}
			</div>
			{/* <br />
			<div className='homeTitle'>Links out of here</div>
			<div className='BlogPreview'>
			<Link
				to="https://www.google.com"
				className='homeCard'>
				<li className='postTitle'>
					Rhizome page
				</li>
			</Link>
			<Link
				to="https://www.google.com"
				className='homeCard'>
				<li className='postTitle'>
					Twitter
				</li>
			</Link>
			<Link
				to="https://www.google.com"
				className='homeCard'>
				<li className='postTitle'>
					Letterboxd
				</li>
			</Link>
			<Link
				to="https://www.google.com"
				className='homeCard'>
				<li className='postTitle'>
					Personal website
				</li>
			</Link>

			<Link
				to="https://www.google.com"
				className='homeCard'>
				<li className='postTitle'>
					I have an unproduced podcast about economics and politics
				</li>
			</Link>
			<Link
				to="https://www.google.com"
				className='homeCard'>
				<li className='postTitle'>
					I also have a produced podcast about soda
				</li>
			</Link>
			</div> */}
		</div>
	);
}

export default Home;
