/** @format */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./styles/Blog.css";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import type { BlogPost, PostPreview } from "../types";
import useMediaQuery from "@mui/material/useMediaQuery";
import sanityClient from "../client";
import {PortableText} from '@portabletext/react'
import {createClient} from '@sanity/client'

// Posts can be contained in a specific type of text block
// BlogHome is a list of all posts followed by an infinite scroll of posts.
// These might be best as snippets. Maybe show top comments
// BlogPost is a single post with comments and a comment box. Sidebar with list of posts

function BlogHome() {
	return <h1>Blog</h1>;
}

function BlogPost() {
	const location = useLocation().pathname.replace("%20", " ").split("/")[3];

	const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
	useEffect(() => {
		console.log("fetching");
		sanityClient
			.fetch(
				`*[slug.current == "${location}"]{
					title,
					publishedAt,
					slug{current},
					body
				  }`
			)
			.then((data) => setBlogPost(data[0]))
			.catch(console.error);
	}, []);

	const components = {
		types: {
		  code: (props: any) => (
			<pre data-language={props.node.language}>
			  <code>{props.node.code}</code>
			</pre>
		  )
		}
	  }

	return (
		blogPost !== null ? (
		<Routes>
					<Route
						path={blogPost?.slug?.current}
						element={
							<div className='BlogBody'>
								<h1 className='postTitle'>{blogPost.title}</h1>
								<div className='postDate'>
									{new Date(blogPost.publishedAt).toLocaleString("default", {
										month: "long",
										day: "numeric",
										year: "numeric",
									})}
								</div>
								<PortableText value={blogPost.body} components={components} />
							</div>
						}
						key={blogPost?.slug?.current}
					/>
			<Route path='*' element={<h1>I never wrote anything with that title</h1>} />
		</Routes>) : (<h1>Loading...</h1>)
	);
}

function BlogNav({titles}: {titles: PostPreview[]}) {
	// We do a lot of sorting by time here so that we don't have to do it elsewhere.
	// Posts are sorted in navigation but are hashed everywhere else.
	const location = useLocation().pathname.replace("%20", " ").split("/")[3];
	const navCss: "blogNavPost" | "blogNavHome" = location !== undefined ? "blogNavPost" : "blogNavHome";
	if (titles.length === 0) {
		return <div className={navCss}><br/><br/>...<br/><br/></div>
	}
	const datedPosts: any = {};
	for (let i = 0; i < titles.length; i++) {
		const yyyy_mm = new Date(titles[i].publishedAt).toLocaleString("default", {
			month: "short",
			year: "numeric",
		});
		if (datedPosts[yyyy_mm] === undefined) {
			datedPosts[yyyy_mm] = [titles[i]];
		} else {
			datedPosts[yyyy_mm].push(titles[i]);
		}
	}

	

	//Sort posts into month cohorts

	// Create the HTML for each month cohort
	const monthBlocks = [];
	for (const month in datedPosts) {
		const thisMonth = datedPosts[month];
		// sort each cohort
		thisMonth.sort(function (a: PostPreview, b: PostPreview) {
			return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
		});


		const posts = () => {
			return (
				<div className='monthBlock' key={month}>
					<h3>{month}</h3>
					{thisMonth.map((post: PostPreview) => {
						return (
							<Link
								to={"post/" + post.slug.current}
								key={post.slug.current}
								style={`${location}` === `${post.slug.current}` ? { color: "#b3b3ff" } : {}}>
								<div className='blogPostBtn'>{post.title}</div>
							</Link>
						);
					})}
				</div>
			);
		};
		monthBlocks.push({ month: new Date(thisMonth[0].date).getTime(), block: posts });
	}

	// Sort the array of month cohorts
	monthBlocks.sort(function (a: any, b: any) {
		return b.month - a.month;
	});

	return (
		<div className={navCss}>
			{monthBlocks.map((monthBlock) => {
				return monthBlock.block();
			})}
		</div>
	);
}

function Blog() {
	const location = useLocation().pathname;
	const css = location === "/Blog/" ? "BlogHome" : "BlogPost";
	const mobile = useMediaQuery("(max-width: 900px)");
	const showNav = mobile && location !== "/Blog/" ? false : true;

	const [titles, setTitles] = useState<PostPreview[]>([]);
	useEffect(() => {
		console.log("fetching")
		sanityClient
			.fetch(
				`*[_type == "post"]{
					title, publishedAt, slug}`
			)
			.then((data) => setTitles(data))
			.catch(console.error);
	}, []);



	return (
		<div className={css}>
			<Routes>
				<Route index element={<BlogHome />} />
				<Route path={"post/*"} element={<BlogPost />} />;
			</Routes>
			{showNav ? (
				<BlogNav titles={titles} />
			) : (
				<Link className='blogPostBtn' to={"/Blog/"} key={"Back"}>
					Back
				</Link>
			)}
		</div>
	);
}

export default Blog;
