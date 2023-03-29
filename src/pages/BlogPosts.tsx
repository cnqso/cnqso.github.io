/** @format */

import type { BlogPost } from "../types";
import WordleViewer from "./BlogPosts/WordleViewer";
import SimCity from "./BlogPosts/SimCity";
// import ReverseWordleSolver from "./BlogPosts/ReverseWordleSolver";
import BotsWillAlwaysWin from "./BlogPosts/BotsWillAlwaysWin";
import Commons from "./BlogPosts/Commons";
import Spirals from "./BlogPosts/Spirals";
import ThisWebsite from "./BlogPosts/ThisWebsite";
// import ThisBlog from "./BlogPosts/ThisBlog";
import LLMApplications from "./BlogPosts/LLMApplications"


// const ReverseWordleSolver: BlogPost = {
// 	title: "Reverse Wordle Solver",
// 	date: new Date(2022, 11, 30),
// 	path: "post2",
// 	post: function () {
// 		return (
// 			<div className='textBlock'>
// 				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
// 				proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor
// 				sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
// 				borum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
// 				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// 				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
// 				reprehenderit in voluptate "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// 				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
// 				nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
// 				dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// 				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
// 				id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
// 				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// 				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
// 				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
// 				occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
// 				laborum."magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
// 				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
// 				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
// 				sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
// 				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
// 				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
// 				ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
// 				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
// 				qui officia deserunt mollit anim id est la
// 			</div>
// 		);
// 	},
// };
// const ThisBlog: BlogPost = {
// 	title: "This Blog",
// 	date: new Date(2022, 11, 30),
// 	path: "thisblog",
// 	post: function () {
// 		return (
// 			<div className='textBlock'>
// 				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
// 				proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor
// 				sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
// 				borum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
// 				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// 				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
// 				reprehenderit in voluptate "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// 				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
// 				nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
// 				dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// 				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
// 				id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
// 				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// 				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
// 				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
// 				occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
// 				laborum."magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
// 				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
// 				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
// 				sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
// 				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
// 				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
// 				ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
// 				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
// 				qui officia deserunt mollit anim id est la
// 			</div>
// 		);
// 	},
// };







const BlogPosts: BlogPost[] = [
	WordleViewer,
	// ReverseWordleSolver,
	SimCity,
	BotsWillAlwaysWin,
	Commons,
	Spirals,
	ThisWebsite,
	// ThisBlog,
	LLMApplications,
];

export { BlogPosts };
