import type {BlogPost} from "../../types";
import {CodeBlock, Footnote} from "../../components/BlogComponents";


const Spirals: BlogPost = {
	title: "Square Spirals",
	date: new Date(2023, 2, 3),
	path: "spirals",
	post: function () {
		return (
			<div className='textBlock'>
				<p>
					I just finished up with a cool project that you can check out{" "}
					<a href='https://cnqso.github.io/spirals/' target='_blank'>
						here
					</a>
					. It&rsquo;s sort of like an interactive blog post detailing an algorithm rabbit hole
					I&rsquo;ve been in lately. Since a lot of the details are in the project itself,
					I&rsquo;ll try to keep this post brief.
				</p>

				<p>
					This project expanded gradually and organically as I learned more about the subject area.
					It started as just a codepen showing off an algorithm that I couldn&rsquo;t find anywhere
					else on the internet, and expanded from there as I learned more about the problem and
					thought of new potential solutions. The end result is 3 different algorithms, all
					original, which solve the &ldquo;problem&rdquo; of square spirals optimized for different
					use cases (run a function on each step, run a function on each turn, and no function at
					all). While all are original, some are disappointingly a parallel invention. The second
					algorithm, running a function on each turn, has been solved before. Previous solutions are
					a little bit different and often follow different specifications (for example, maintaining
					a space between each line) or use different approaches (like{" "}
					<a
						href='https://jonseymour.medium.com/investigating-the-properties-of-a-square-spiral-6aa635a4d803'
						target='_blank'>
						this incredible but complicated solution
					</a> 
					). The final algorithm, which finds the coordinates of the nth square in the sequence,
					ended up being more-or-less mathematically identical to the more convoluted solutions I
					was able to find. My version is significantly faster and more compact, but doesn&rsquo;t
					do anything to revolutionary. It was a bit prideful to assume I could barge into a field I
					know nothing about and invent something groundbreaking, as niche as the particular problem
					may be.
				</p>

				<p>
					The project is built with React and let me tell you, I feel like I have <em>mastered</em>{" "}
					useEffect now. I got some experience with HTMLCanvas + useEffect in my previous project{" "}
						<a href='http://cnqso.github.io/Blog/post/commons' target='_blank'>
							Commons{" "}
						</a> 
					but this project involved iteration upon iteration of the combination in different
					configurations and use cases. My pure javascript experience was also pretty basic, so the
					untamed imperative jungle of useEffect made me learn quickly.
				</p>

				<p>
					This was also the first time I firmly followed a style from beginning to end. I knew from
					the outset that I wanted a simple, hard-edges design with empty spaces and a earth-tone,
					1970&rsquo;s color scheme. This brought many challenges that I didn&rsquo;t foresee in
					speed and usability. In speed, it conflicted with many pre-built React solutions which
					usually follow the modern design ethos of rounded edges and lava lamp physicality. I split
					the conflicts between long component customization sessions and compromises I wasn&rsquo;t
					quite happy with (I can&rsquo;t believe I kept the round-edge buttons in. Maybe I&rsquo;ll
					go back and fix that). In usability, it made me keep having to add colors and design
					exceptions. The red, black, and brown colors that you can see in the final color palette
					were added mid-process because the palette I had was insufficient for distinguishing
					features and reading text. I&rsquo;m not too disappointed by the changes I had to make for
					usability, these didn&rsquo;t like compromises as much as adaptations. I&rsquo;m happy
					with the final design for the most part.
				</p>

				<p>
					The footnotes were something I had in my mind for a while for a potential blog format.
					[3/27/2023:{" "}
					<a href='http://cnqso.github.io/Blog/post/thiswebsite' target='_blank'>
						you&rsquo;re reading it on that format now!
					</a>
					] I can get bogged down in details, but this is because details are often important and
					usually interesting. I like the idea of highly extensive footnotes because it lets you
					have the best of both worlds: you can develop a &ldquo;tight&rdquo; writing style without
					sacrificing depth. In print it would be annoying to constantly flip to an appendix, but
					the dropdown style of footnotes you see in places like 538 elevates it to an optional
					drawer of additional information. It empowers the user to choose the level of depth they
					want at any given time, and helps them trust that you won&rsquo;t waste too much of their
					time<Footnote num={1}>Though to be fair, I say this while in the 6th paragraph of what is
					effectively a reflective appendix to an already lengthy post</Footnote> I&rsquo;m excited to
					iterate on this more in the future.
				</p>
				<p>
					I&rsquo;m really glad I had an excuse to use the Victory library. Not much to say about
					victory other than that it&rsquo;s awesome. It was a bit of a performance bottleneck, but
					this is just my particular weird use case. I can&rsquo;t recommend it enough. Few
					libraries are beautiful out of the box.
				</p>
				<p>
					I said I would keep it brief but look at me now. To quickly summarize, this was a fun
					little project that took a little bit too long to make. I went in trying to make a small,
					super polished product and came out with a moderately sized, solidly polished product.
				</p>
			</div>
		);
	},
};

const Spirals2: BlogPost = {
	title: "Square Spirals",
	date: new Date(2023, 2, 3),
	path: "post6",
	post: function () {
		return (
			<div className='textBlock'>
				<p>
					I just finished up with a cool project that you can check out{" "}
					<a href='https://cnqso.github.io/spirals/' target='_blank'>
						here
					</a>
					. It&rsquo;s sort of like an interactive blog post detailing an algorithm rabbit hole
					I&rsquo;ve been in lately. Since a lot of the details are in the project itself,
					I&rsquo;ll try to keep this post brief.
				</p>

				<p>
					This project expanded gradually and organically as I learned more about the subject area.
					It started as just a codepen showing off an algorithm that I couldn&rsquo;t find anywhere
					else on the internet, and expanded from there as I learned more about the problem and
					thought of new potential solutions. The end result is 3 different algorithms, all
					original, which solve the &ldquo;problem&rdquo; of square spirals optimized for different
					use cases (run a function on each step, run a function on each turn, and no function at
					all). While all are original, some are disappointingly a parallel invention. The second
					algorithm, running a function on each turn, has been solved before. Previous solutions are
					a little bit different and often follow different specifications (for example, maintaining
					a space between each line) or use different approaches (like{" "}
					<a
						href='https://jonseymour.medium.com/investigating-the-properties-of-a-square-spiral-6aa635a4d803'
						target='_blank'>
						this incredible but complicated solution
					</a> 
					). The final algorithm, which finds the coordinates of the nth square in the sequence,
					ended up being more-or-less mathematically identical to the more convoluted solutions I
					was able to find. My version is significantly faster and more compact, but doesn&rsquo;t
					do anything to revolutionary. It was a bit prideful to assume I could barge into a field I
					know nothing about and invent something groundbreaking, as niche as the particular problem
					may be.
				</p>

				<p>
					The project is built with React and let me tell you, I feel like I have <em>mastered</em>{" "}
					useEffect now. I got some experience with HTMLCanvas + useEffect in my previous project{" "}
						<a href='http://cnqso.github.io/Blog/post/commons' target='_blank'>
							Commons{" "}
						</a> 
					but this project involved iteration upon iteration of the combination in different
					configurations and use cases. My pure javascript experience was also pretty basic, so the
					untamed imperative jungle of useEffect made me learn quickly.
				</p>

				<p>
					This was also the first time I firmly followed a style from beginning to end. I knew from
					the outset that I wanted a simple, hard-edges design with empty spaces and a earth-tone,
					1970&rsquo;s color scheme. This brought many challenges that I didn&rsquo;t foresee in
					speed and usability. In speed, it conflicted with many pre-built React solutions which
					usually follow the modern design ethos of rounded edges and lava lamp physicality. I split
					the conflicts between long component customization sessions and compromises I wasn&rsquo;t
					quite happy with (I can&rsquo;t believe I kept the round-edge buttons in. Maybe I&rsquo;ll
					go back and fix that). In usability, it made me keep having to add colors and design
					exceptions. The red, black, and brown colors that you can see in the final color palette
					were added mid-process because the palette I had was insufficient for distinguishing
					features and reading text. I&rsquo;m not too disappointed by the changes I had to make for
					usability, these didn&rsquo;t like compromises as much as adaptations. I&rsquo;m happy
					with the final design for the most part.
				</p>

				<p>
					The footnotes were something I had in my mind for a while for a potential blog format.
					[3/27/2023:{" "}
					<a href='http://cnqso.github.io/Blog/post/thiswebsite' target='_blank'>
						you&rsquo;re reading it on that format now!
					</a>
					] I can get bogged down in details, but this is because details are often important and
					usually interesting. I like the idea of highly extensive footnotes because it lets you
					have the best of both worlds: you can develop a &ldquo;tight&rdquo; writing style without
					sacrificing depth. In print it would be annoying to constantly flip to an appendix, but
					the dropdown style of footnotes you see in places like 538 elevates it to an optional
					drawer of additional information. It empowers the user to choose the level of depth they
					want at any given time, and helps them trust that you won&rsquo;t waste too much of their
					time<Footnote num={1}>Though to be fair, I say this while in the 6th paragraph of what is
					effectively a reflective appendix to an already lengthy post</Footnote> I&rsquo;m excited to
					iterate on this more in the future.
				</p>
				<p>
					I&rsquo;m really glad I had an excuse to use the Victory library. Not much to say about
					victory other than that it&rsquo;s awesome. It was a bit of a performance bottleneck, but
					this is just my particular weird use case. I can&rsquo;t recommend it enough. Few
					libraries are beautiful out of the box.
				</p>
				<p>
					I said I would keep it brief but look at me now. To quickly summarize, this was a fun
					little project that took a little bit too long to make. I went in trying to make a small,
					super polished product and came out with a moderately sized, solidly polished product.
				</p>
			</div>
		);
	},
};
export default Spirals;