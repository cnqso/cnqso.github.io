/** @format */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import { projectObject } from "./Projects";
import type { PostPreview } from "../types";
import NavButton from "../components/NavButton";
import sanityClient from "../client";

function Home() {
	const projectKeys = Object.keys(projectObject).slice(0, 3);
	const [titles, setTitles] = useState<PostPreview[]>([]);
	
	useEffect(() => {
		console.log("fetching");
		sanityClient
			.fetch(`*[_type == "post"] | order(_createdAt desc)[0..2]`)
			.then((data) => setTitles(data))
			.catch(console.error);
	}, []);
	// Intro blurb (I'm a programmer bla bla bla)
	// Links (maybe all of this can be shared with Hire Me, make it stay in place on that change)

	// Projects - basic list
	// Blog - basic list

	return (
		<div className='container Home' style={{ textAlign: "left" }}>
			<div className='blurb'>I am a programmer </div>

			<div className='resumeLinks'>
				<span className='resumeLink'>
					<a href='https://github.com/cnqso' target='_blank'>
						Github
					</a>
				</span>
				<span className='resumeLink'>
					<a href='https://www.linkedin.com/in/william-kelly-715756242/' target='_blank'>
						LinkedIn
					</a>
				</span>
				<span className='resumeLink'>
					<a href='/#/Contact' target='_blank'>
						Contact
					</a>
				</span>
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
				{titles.map((post: PostPreview) => {
					return (
						<Link to={"/Blog/post/" + post.slug.current} className='homeCard'>
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
