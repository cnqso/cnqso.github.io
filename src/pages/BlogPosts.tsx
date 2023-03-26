/** @format */

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";

export type BlogPost = { title: string; date: Date; path: string; post: () => JSX.Element };

const WordleViewer: BlogPost = {
	title: "Wordle Viewer",
	date: new Date(2022, 11, 21),
	path: "post1",
	post: function () {
		return (
			<div className='textBlock'>
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
				non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
				ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
				minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
				fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
				officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
				minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
				fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
				officia deserunt mollit anim id est laborum." <Footnote num={1}>{"Hello"}</Footnote>
			</div>
		);
	},
};

const ReverseWordleSolver: BlogPost = {
	title: "Reverse Wordle Solver",
	date: new Date(2022, 11, 30),
	path: "post2",
	post: function () {
		return (
			<div className='textBlock'>
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor
				sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				borum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum."magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
				ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est la
			</div>
		);
	},
};

const SimCity: BlogPost = {
	title: "How Did Sim City Work",
	date: new Date(2023, 0, 3),
	path: "post3",
	post: function () {
		return (
			<div>Simz</div>
		);
	},
};

const BotsWillAlwaysWin: BlogPost = {
	title: "Bots Will Always Win",
	date: new Date(2023, 1, 3),
	path: "post4",
	post: function () {
		return (
			<div className='textBlock'>
				<p className='paragraph'>
					Twitter’s API now costs $100 to access. For the vast majority of twitter API users this
					represents the end. Nobody is going to shell out $100 a month to keep their hourly red
					panda or PC-98 game screenshot bot running.
				</p>
				<p>
					At the same time, this is something I would categorize as a stupid problem. Stupid
					problems are very interesting because they don’t test your problem solving ability as much
					as your self-awareness: most things that seem like stupid problems at a glance are
					actually more complicated, and the glancer needs to quell their ego.
				</p>

				<p>
					The twitter API does very trivial tasks. I would estimate that about 94% of the twitter
					API is used for automatically sending tweets on some interval. This may be for
					professional usage by businesses or personalities through Tweetdeck and similar software,
					or it may be connected to some client-side app that automatically collects pictures of red
					pandas, babytron lyrics, AI generated tweets, etc. Another 5% might be for collecting
					tweet data. This could again be for professional usage (monitoring specific tags or terms
					for marketing or finance) or for personal use in scraping, like with NBA Film Tweets. The
					last 1% is authentication and 3rd party integration, problems that are actually complex
					enough to warrant a decent price tag.
				</p>

				<p>
					It is not hard to send a tweet. In fact, it I would say it is one of the easier things
					that one could do. You could probably automate this using selenium in 5 minutes. Open the
					browser, go to twitter.com, enter username and password, navigate to the text box, enter
					the desired message (say, read from a JSON file), then sendTweet.click(). Reading a tweet
					is notably more difficult for a computer to do, but I would still categorize it as “easy”.
					In selenium I’d give myself an hour to figure it out. Find out the class names of a
					tweet’s text, profile name, etc. then tell selenium to read everything it can find on a
					screen and send it somewhere for processing. Scroll down as needed and continue until
					you’re satisfied. <br />
					That last paragraph is a lie. Big tech companies hate bots, so logging in to any major
					social media site with Selenium is a non-starter. You might have a bit better luck using a
					more modern web scraping library, but don’t expect it to last long: the arms race between
					web scrapers and big tech companies is escalating constantly. Now that 5 minute python
					script needs to be re-engineered every month.
				</p>

				<p>
					All you wanted to do was send a tweet and now you’re navigating a corporate shadow-war.
					Sending a tweet is not hard, and there is nothing in the process that a computer can’t do
					just as easily. Let’s take a step back and think of the problem.{" "}
					<ol>
						<li>
							Sending a tweet is an easy, predictable act that requires very few motions, 5
							mouse clicks, and 10-300 keypresses
						</li>
						<li>
							However, the tweet-sending interface is an enormous, always-learning machine that
							must make sure that those button presses are coming from a real, breathing human.
						</li>
					</ol>
					From a few feet back, it becomes clear that your engineering focus is not “sending a
					tweet” as it were, but tricking a human-detection algorithm. There’s no engineering to be
					done in the former. What you really need in this case, and in every case where you
					interact with a human-detection machine, is a replicable tool to appear like a human.
					Given this perspective, it’s clear that Selenium or a similar web scraping library is the
					worst possible approach to a problem like this. Like most problems, people have already
					found solutions that we can learn from. Let’s talk about aimbots.
				</p>
				<p>
					Aimbots are automation software that have managed to thrive in an environment which is
					much more hostile to bots than social media sites. In a game like CS:GO, developers have
					access to far more moment-to-moment information than Google or Facebook. CS:GO takes in
					every frame of mouse data and every piece of information that you could have at any given
					time — not so in a login page. If suspected of cheating, the data pipeline is opened up,
					and machine learning algorithms are weaponized against every mouse twitch and hesitation.
					Even then, aimbots still thrive in the game. It turns out that the difference between a
					robot and a near-perfect human are subtle and easily replicable. In most cases, adding a
					sufficient number of random parameters to the automated motions is enough for a discerning
					user to fly under the radar. Games must keep the false-positive rate very low, and the
					variance in human mouse movements is very high.
				</p>
				<p>
					Some modern games have more advanced anti-cheat that detect modifications or unexpected
					reads from game memory, but memory reads aren’t an instrinsic component of an aimbot. The
					new hotness is now AI aimbots that read pixel data directly and detect player silhouettes
					and output the appropriate mouse movement. Valorant took it step further and required a
					kernel-level anti-cheat software that can detect most approaches to input modification. No
					problem, you can just capture the can pixel data directly from the GPU or through a
					capture card and process your mouse input with a Raspberry Pi. When the part that actually
					matters — the change of mouse pixel coordinates — is so easy to spoof, the only remaining
					approach to stopping cheaters is detecting the shortcuts that the cheater took. At every
					stage, cheaters just used the easiest approach that wasn’t already patched out.
				</p>
				<p>
					So what can we learn from this? Most importantly, there are actions where “human
					verification” might be impossible without an untenably high false positive rate. In these
					situations, detection depends entirely on common, non-essential features of automated
					approaches. For example, Selenium injects javascript into every webpage it visits, which
					is easily detectable by any page. Users on StackOverflow advocate a diverse array of
					superstitious solutions, all of which either don’t work anymore or never worked in the
					first place.
				</p>
				<p>
					The only real solution that can last the test of time is to find a higher-level solution.
					Let’s think, what data can a website gather to determine if a user is real or fake? Is
					there unexpected javascript injected on load? Is the browser Chrome/Firefox/Safari on
					Windows/Mac? Does the browser show some use? Is there anything very unusual about site
					cookies, third party cookies, location, cached browser data, or any combination of these
					variables? Does it match previous log-ins? Does the user navigate and move the mouse
					normally? Can the user solve a Captcha if they raise any red flags on the previous
					questions?
				</p>
				<p>
					We can see here that certain options are non-starters: we shouldn’t use any custom
					browsers or anything that modifies the code of a webpage. We probably shouldn’t run it in
					a headless browser on EC2 either, as we’d like the browser to show some natural signs of
					aging. Lastly, we should allow for some sort of contingency plan in the event of a Captcha
					— either sending it to the creator or outsourcing to one of many Captcha-solving services.
				</p>
				<p>
					Here’s a sketch:{" "}
					<ol>
						<li>
							Environment{" "}
							<ol type="a">
								<li>
									On an old laptop or junk desktop (easier but worse: a VM) we log in to our
									browser of choice. We sync our passwords, history, bookmarks, etc., then do
									some casual browsing on the sites you’d like to target.
								</li>
							</ol>
						</li>{" "}
						<li>
							Mouse movement and navigation{" "}
							<ol type="a">
								<li>
									For simple tasks you can simply record yourself doing the task before and
									after a variable component (in the case of a tweet-sending bot, pasting the
									tweet). For more advanced sites like google, you might want to record many
									variants to skirt detection. Make sure to anticipate potential errors if, for
									example, a data-collection modal loads unexpectedly.
								</li>{" "}
								<li>
									For more complex tasks with variable click locations, you will want to
									implement a “jitter” function similar to those used in aimbots. You could
									spend anywhere from 60 seconds to a month on this. You may decide that
									randomizing the speed of your mouse from location to location is enough. You
									may, on the other hand, choose to train a model to perfectly replicate your
									mouse movements, differentiating for different browser contexts. While a bit
									overkill, this is would be a fun project. In fact, I would argue that it would
									be extremely unlikely for google to detect a decently well-trained model.
									Sure, Google has a billion times the data that you do, but you don’t need to
									be perfect. Google has to keep the false positive rate very low, and they can
									not afford to run advanced processes on every user. You don’t have to be as
									normal as the average real human, you just have to be more normal than the
									weirdest 10% of real humans. More than anything, consistent normalcy is key.
									Any spikes in strange behavior will (probably) lead to a higher degree of
									scrutiny (more input data processed, more compute used on detection, more
									captchas).
								</li>
							</ol>
						</li>{" "}
						<li>
							Browsing{" "}
							<ol type="a">
								<li>
									You could read directly from HTML or read raw pixel data. In my opinion,
									processing the pixel data would be better. Sure, it would be thousands of
									times slower, but websites load content very slowly anyway, and speed is not
									an issue here. You are required to go slowly, so you can make a more reliable
									product which is less likely to become detectable in the future. If we use
									already-available machine learning libraries to detect elements in the pixel
									data (for example, detecting the location of a log-in button on a website), we
									could easily generalize our browsing bot for most websites. Unique website
									layouts are incredibly rare.
								</li>{" "}
								<li>
									It’s important that we integrate some “casual” browsing as well — if all we do
									is make a beeline to the search bar every time we log in, that could be picked
									up as unusual.
								</li>
							</ol>
						</li>{" "}
						<li>
							Fun stuff{" "}
							<ol type="a">
								<li>
									We’re essentially designing a human web-browsing AI model. What if we tried
									that? If we recorded ~100 hours of mouse inputs, keyboard inputs, and pixel
									data, we could probably get a workable GAN on consumer hardware. Could be fun
								</li>{" "}
								<li>
									What if we clicked on more ads than an average person? I don’t think this
									would do anything for detection, but it would be kinda funny.
								</li>
							</ol>
						</li>
					</ol>{" "}
				</p>
				<p>
					This article is super long so I’ll stop with that. If you see any problems with this so
					far or have any ideas, let me know! I’ll post again when I’ve made some headway.
				</p>
			</div>
		);
	},
};

const Commons: BlogPost = {
	title: "Commons",
	date: new Date(2023, 1, 15),
	path: "post5",
	post: function () {
		return (
			<div className='textBlock'>
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor
				sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				borum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum."magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
				ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est la
			</div>
		);
	},
};

const Spirals: BlogPost = {
	title: "Square Spirals",
	date: new Date(2023, 2, 3),
	path: "post6",
	post: function () {
		return (
			<div className='textBlock'>
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor
				sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				borum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum."magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
				ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est la
			</div>
		);
	},
};

const ThisWebsite: BlogPost = {
	title: "This Website",
	date: new Date(2023, 2, 26),
	path: "post7",
	post: function () {
		return (
			<div className='textBlock'>
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor
				sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				borum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum."magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
				ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est la
			</div>
		);
	},
};

const ThisBlog: BlogPost = {
	title: "This Blog",
	date: new Date(2023, 2, 27),
	path: "post8",
	post: function () {
		return (
			<div className='textBlock'>
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor
				sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				borum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum."magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
				ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est la
			</div>
		);
	},
};

const LLMApplications: BlogPost = {
	title: "LLM Applications in the Literacy Crisis",
	date: new Date(2023, 2, 28),
	path: "post9",
	post: function () {
		return (
			<div className='textBlock'>
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor
				sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				borum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum."magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
				ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est la
			</div>
		);
	},
};

// The footnote component can accept any JSX element or string as a child
// The num prop
function Footnote({
	children,
	num,
	punctuation = ". ",
}: {
	children: JSX.Element | string;
	num: number | string;
	punctuation?: string;
}) {
	const scrollRef = useRef<HTMLSpanElement>(null);
	const [show, setShow] = useState(false);
	const scrollBack = () => {
		// Scroll back to top of footnote
		setShow(false);
	};

	return (
		<>
			<span
				className={"footnoteButton"}
				onClick={() => {
					setShow(!show);
				}}>
				<sup ref={scrollRef} style={{ color: "#de731d" }}>
					[{num}]
				</sup>
				{punctuation}
			</span>

			<Collapse in={show} timeout='auto' unmountOnExit>
				<div className='footnote'>
					<div
						className='footnoteButton'
						onClick={() => {
							setShow(false);
						}}
						style={{ textAlign: "center", marginTop: 0, fontSize: "2em" }}>
						<b>^</b>
					</div>

					{children}
				</div>
				<div style={{ padding: "30px", cursor: "pointer" }} onClick={scrollBack}>
					<hr style={{ borderTop: "1px solid #de731d" }} />
				</div>
			</Collapse>
		</>
	);
}

const BlogPosts: BlogPost[] = [
	WordleViewer,
	ReverseWordleSolver,
	SimCity,
	BotsWillAlwaysWin,
	Commons,
	Spirals,
	ThisWebsite,
	ThisBlog,
	LLMApplications,
];

export { BlogPosts };
