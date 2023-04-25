/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import "./styles/Blog.css";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { BlogPosts } from "./BlogPosts";
import type { BlogPost } from "../types";
import useMediaQuery from "@mui/material/useMediaQuery";

// Posts can be contained in a specific type of text block
// BlogHome is a list of all posts followed by an infinite scroll of posts.
// These might be best as snippets. Maybe show top comments
// BlogPost is a single post with comments and a comment box. Sidebar with list of posts

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

function BlogHome() {
	return <h1>Blog</h1>;
}

function BlogPost() {
	return (
		<Routes>
			{BlogPosts.map((post) => {
				return (
					<Route
						path={post.path}
						element={
							<div className='BlogBody'>
								<h1 className="postTitle">{post.title}</h1>
								<div className="postDate">{post.date.toLocaleString("default", { month: "long", day: "numeric", year: "numeric" })}</div>
								{post.post()}
							</div>
						}
						key={post.title}
					/>
				);
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
					<h3>{month}</h3>
					{thisMonth.map((post: BlogPost) => {
						return (
							<Link
								to={"post/" + post.path}
								key={post.title}
								style={
									`${location}` === `${post.path}`
										? { color: "#b3b3ff" }
										: {}
								}>
								<div className='blogPostBtn'>{post.title}</div>
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

	return (
		<div className={css}>
			<Routes>
				<Route index element={<BlogHome />} />
				<Route path={"post/*"} element={<BlogPost />} />;
			</Routes>
			{showNav ? (
				<BlogNav />
			) : (
				<Link className='blogPostBtn' to={"/Blog/"} key={"Back"}>
					Back
				</Link>
			)}
		</div>
	);
}

export default Blog;
export { datedPosts };
