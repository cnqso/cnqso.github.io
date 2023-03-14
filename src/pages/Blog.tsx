/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import "./styles/Blog.css";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { BlogPosts } from "./BlogPosts";
import type { BlogPost } from "./BlogPosts";

// Posts can be contained in a specific type of text block
// BlogHome is a list of all posts followed by an infinite scroll of posts.
// These might be best as snippets. Maybe show top comments
// BlogPost is a single post with comments and a comment box. Sidebar with list of posts

function BlogHome() {
	return <h1>Blog</h1>;
}

function BlogPost() {
	return (
		<Routes>
			{BlogPosts.map((post) => {
				return <Route path={post.path} element={post.post()} key={post.title} />;
			})}
			<Route path='*' element={<h1>I never wrote anything with that title</h1>} />
		</Routes>
	);
}

function BlogNav() {
	// We do a lot of sorting by time here so that we don't have to do it elsewhere.
	// Posts are sorted in navigation but are hashed everywhere else.

	const location = useLocation().pathname.replace("%20", " ").split("/")[3];
	const navCss: "blogNavPost" | "blogNavHome" = location !== undefined ? "blogNavPost" : "blogNavHome";

	//Sort posts into month cohorts
	const datedPosts: any = {};
	for (let i = 0; i < BlogPosts.length; i++) {
		const yyyy_mm = BlogPosts[i].date.toLocaleString("default", {
			month: "short",
			year: "numeric",
		});
		if (datedPosts[yyyy_mm] === undefined) {
			datedPosts[yyyy_mm] = [BlogPosts[i]];
		} else {
			datedPosts[yyyy_mm].push(BlogPosts[i]);
		}
	}

	// Create the HTML for each month cohort
	const monthBlocks = [];
	for (const month in datedPosts) {
		const thisMonth = datedPosts[month];

		// sort each cohort
		thisMonth.sort(function (a: BlogPost, b: BlogPost) {
			return b.date.getTime() - a.date.getTime();
		});

		const posts = () => {
			return (
				<div className='monthBlock' key={month}>
					<h2>{month}</h2>
					{thisMonth.map((post: BlogPost) => {
						return (
							<Link
								className='blogPostBtn'
								to={"post/" + post.path}
								key={post.title}
								style={
									`${location}` === `${post.path}`
										? { color: "#b3b3ff" }
										: { color: "white" }
								}>
								{post.title}
							</Link>
						);
					})}
				</div>
			);
		};
		monthBlocks.push({ month: thisMonth[0].date.getTime(), block: posts });
	}

	// Sort the array of month cohorts
	monthBlocks.sort(function (a: any, b: any) {
		return b.month - a.month;
	});

	// The final result is a sorted latest-to-oldest list of posts seperated by month

	return (
		<div className={navCss}>
			{location !== undefined ? (
				<Link className='blogPostBtn' to={"/Blog/"} key={"Back"} style={{ color: "white" }}>
					Back
				</Link>
			) : null}
			{monthBlocks.map((monthBlock) => {
				return monthBlock.block();
			})}
		</div>
	);
}

function Blog() {
	const location = useLocation().pathname
	const css = location === "/Blog/" ? "BlogHome" : "BlogPost";
	console.log(location);
	return (
		<div className={css}>
			<BlogNav />
			<Routes>
				<Route index element={<BlogHome />} />
				<Route path={"post/*"} element={<BlogPost />} />;
			</Routes>
		</div>
	);
}

export default Blog;
