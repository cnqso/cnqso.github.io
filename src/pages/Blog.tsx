/** @format */

import { useState, useEffect, useContext } from "react";
import { SanityContext } from "../App";
import "./styles/Blog.css";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import type { BlogPost, PostPreview } from "../types";
import { sanityClient } from "../client";
import CustomPortableText from "../components/BlogComponents";

function BlogHome() {
	return <h1>Blog</h1>;
}

function BlogPost() {
	const location = useLocation().pathname.replace("%20", " ").split("/")[3];

	const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [fourohfour, setFourohfour] = useState<boolean>(false);
	useEffect(() => {
		setFourohfour(false);
		setLoading(true);
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
			.then((data) => {
				if (data[0] === undefined) {
					setFourohfour(true);
				}
				setBlogPost(data[0]);
			})
			.catch(console.error);
		setLoading(false);
	}, [location]);

	return (
		<Routes>
			<Route
				path={location}
				element={
					<>
						{blogPost ? (
							<div className='BlogBody'>
								<h1 className='postTitle'>{blogPost.title}</h1>
								<div className='postDate'>
									{new Date(blogPost.publishedAt).toLocaleString("default", {
										month: "long",
										day: "numeric",
										year: "numeric",
									})}
								</div>
								<CustomPortableText body={blogPost?.body} />
							</div>
						) : fourohfour ? (
							<h1>I never wrote anything with that title</h1>
						) : (
							<h1>...</h1>
						)}
					</>
				}
				key={blogPost?.slug?.current}
			/>
		</Routes>
	);
}

function BlogNav({ titles }: { titles: PostPreview[] }) {
	// We do a lot of sorting by time here so that we don't have to do it elsewhere.
	// Posts are sorted in navigation but are hashed everywhere else.
	const location = useLocation().pathname.replace("%20", " ").split("/")[3];
	const navCss: "blogNavPost" | "blogNavHome" = location !== undefined ? "blogNavPost" : "blogNavHome";
	if (titles.length === 0) {
		return (
			<div className={navCss}>
				<br />
				<br />
				...
				<br />
				<br />
			</div>
		);
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
		monthBlocks.push({ month: new Date(thisMonth[0].publishedAt).getTime(), block: posts });
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
	const css = location === "/Blog" ? "BlogHome" : "BlogPost";

	const data = useContext(SanityContext);

	if (!data || !data.posts) {
		return <h1>...</h1>;
	}

	return (
		<div className={css}>
			<Routes>
				<Route index element={<BlogHome />} />
				<Route path={"post/*"} element={<BlogPost />} />;
			</Routes>

				<BlogNav titles={data.posts} />

				<Link className='blogPostBtn blogPostBack' to={"/Blog"} key={"Back"}>
					Back
				</Link>

		</div>
	);
}

export default Blog;
