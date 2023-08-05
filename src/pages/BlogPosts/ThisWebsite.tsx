/** @format */

import type { BlogPost } from "../../types";
import { CodeBlock, Footnote } from "../../components/BlogComponents";

function NestedFootnote() {
	//get random number between 1 and 10
	const footnoteNumber = Math.floor(Math.random() * 100) + 4;
	//get random color
	const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];
	const color = colors[Math.floor(Math.random() * colors.length)];
	return (
		<span style={{ color: color }}>
			They also allow for programmatic content and recursion
			<Footnote num={footnoteNumber} punctuation='!'>
				<NestedFootnote />
			</Footnote>
		</span>
	);
}

const ThisWebsite: any = {
	title: "This Website",
	date: new Date(2023, 2, 26),
	path: "thiswebsite",
	post: function () {
		return (
			<div className='textBlock'>
				<p>
					This website is a casually pursued project to make a professional showcase for my work.
					The development process was pretty straightforward and predictable, so I&rsquo;ll keep
					this post brief.
				</p>

				<p>
					This was my first project using typescript, which is predominantly to blame for the
					extended development time. I enjoyed the learning process, though I will say that the
					final product is a convoluted mess of disparate types and strange import patterns. I have
					a month or two left before I can fell I can confidently market myself as someone who
					&ldquo;knows&rdquo; typescript, but I feel well on my way.
				</p>

				<p>
					The project page is animated using Framer Motion. It&rsquo;s a bit overdeveloped, but I
					like the final look. The Hire Me page uses Framer Motion to swap the title and the nav
					bar, turning the website title into the header of my resume. I thought this was a fun
					little touch. The projects page uses a custom grid-like layout that I saw in a dream
					<Footnote num={1} punctuation=', '>
						This isn&rsquo;t a joke. My main regret is that the dream version was more readable on
						mobile.
					</Footnote>
					which I think turned out alright. I&rsquo;m frustrated with the way that the project image
					stretches with the container for a few frames on close. This is a function of how framer
					motion works: it calculates the final look of the component and animates it as a single
					image. You can&rsquo;t expand a wrapper without expanding everything inside of it
					proportionally. I might continue fiddling with this in the future &mdash; in the worst
					case I could just place and animate each internal element separate from the container.
				</p>

				<p>
					The blog (you are here) was adapted in large part from design patterns I came up with in
					my <strong>previous project</strong>. You might wonder why I designed a blog format from
					scratch rather than just using one of the thousands of pre-made blog formats ready out of
					the box. The most important reason is that I&rsquo;m setting up for a future project that
					needs a highly customizable and modular way to post and retrieve centralized long-form
					content. I always try to develop with a high bird to stone ratio.
				</p>

				<p>
					Aside from this, the freedom is really great. I needed these tools in my previous project
					because I had to embed modular applets into the text, and sometimes the footnotes, without
					any trouble. You can&rsquo;t do that in substack. Maybe most of all, this footnote format
					was a dream of mine for a while
					<Footnote num={2}>
						<>
						The footnotes also can have nested footnotes
						<Footnote num={3} punctuation='! '>
							<NestedFootnote />
						</Footnote></>
					</Footnote>{" "}
					I might opt for some premade formats later in the process if it helps with things like
					SEO, but for now I&rsquo;m just focused on setting things up for a cool, forthcoming
					project. My only real desire right now is a headless CMS that gives me the freedom I'm
					looking for without too many steps. Right now I draft my posts in a word processor to
					boost formatting speed and catch grammatical errors and then post them into a text-to-HTML
					converter. This is embarassing! I place freedom and control over convenience, but it would
					be nice to have both.
				</p>

				<p>
					I tried to hit a balance between my personal design ideals and what I consider to be
					&ldquo;standard&rdquo; design principles. I think that I was able to find a blend of the
					two which is presentable if a bit uninspired. My biggest design influence was Leo
					Robinovitch&rsquo;s personal website. I really love the brilliant simplicity of it. I
					think that this level of simplicity is my ideal endgame for this website. Simplicity is a
					privilege you only get after you&rsquo;ve proved that you can do all of the complicated
					stuff.
				</p>

				<p>
					What&rsquo;s next with this website? I need to take a month-or-so break so that I can look
					at the CSS with fresh eyes. I suspect that my card layout is ugly, but it&rsquo;s hard to
					tell when you&rsquo;ve been looking at it for 2 weeks. Other than that it&rsquo;s just a
					matter of keeping things well-updated. I hold no illusions about likely traffic, but
					there&rsquo;s nothing more shameful than an abandoned website.
				</p>

				<p>Thanks for visiting!</p>
			</div>
		);
	},
};

export default ThisWebsite;
