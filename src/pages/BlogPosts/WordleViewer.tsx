import type {BlogPost} from "../../types";
import {CodeBlock, Footnote} from "../../components/BlogComponents";

const WordleViewer: BlogPost = {
	title: "Wordle Viewer",
	date: new Date(2022, 11, 21),
	path: "post1",
	post: function () {
		return (
			<div className='textBlock'>
				<p>
					Me and my mom send each other our Wordle scores on most days, and it has become a fun way
					to keep in touch. For Christmas, I wanted to make some sort of gift that could showcase
					the previous year of exchanges. The end result was Wordle Viewer, a web app that displays
					Wordle scores in a gallery format, as well as the original text messages, comparisons, and
					stats. The app is built with React, and the "backend" is a Python script using the SQLite,
					JSON, and wordfreq libraries. The first challenge was to get the scores. A little bit of
					research showed that, luckily, iPhone SMS and iMessage data is easily downloaded. However,
					I was unable to find any trivial way to export all messages in a single text conversation
					without using some sort of paid software. I'm cheap, so I learned SQL instead.
				</p>
				<p>
					An iPhone's text backup file is labelled as 3d0d7e5fb2ce288813306e4d4636395e047a3d28.db.
					This is an SQLite database with a somewhat unintuitive relational schema. All messages are
					stored in a single table, and each message has a conversation ID that references a
					conversation table. The ID of the conversation table is the same as the ID of the contact
					table, which contains a contact's display name and phone number. Since a single user can
					have multiple conversation IDs and display names (usually distinguishing between iMessage
					and SMS [I found this out the hard way]), the user's phone number is the best way to
					identify a conversation. After a few relational queries, I was able to get an SQLite
					database of all messages sent to or from any single phone number with text, time, and
					sender data
					<Footnote num={1}>
						{
							"This was actually pretty trivial to do, which makes me wonder why the available software solutions are so expensive. I knew 0 SQL going into this process, and it took about 2 hours to finish a script which can get you a temporally ordered list of all messages in a conversation, in db, JSON, and CSV formats. This has real applications: the paid software makes pretty solid money off of lawyers who need an archived and searchable record of text messages. A free, open-source solution would be a trivial project. Either someone needs to make it, or someone has already made it and they need to fix their SEO. I'll try to look into this by the end of 2023."
						}
					</Footnote>{" "}
					Next was processing the messages.
				</p>
				Wordle scores are usually shared through a provided string format that looks like this:
				<div style={{ textAlign: "center", letterSpacing: 0, lineHeight: "1.2em" }}>
					Wordle 645 5/6
					<br />
					⬛⬛⬛⬛🟩
					<br />
					⬛⬛⬛🟨🟩
					<br />
					🟨⬛🟨🟨🟩
					<br />
					🟩🟩🟨🟨🟩
					<br />
					🟩🟩🟩🟩🟩
				</div>
				<p>
					This is a pretty charming and well-designed format. More important for our purposes, it is
					consistent and highly distinctive. We have the word "Wordle", followed by the game's
					number and the player's score out of 6. After that, we have a grid of emojis that shows
					the player's moves. I reduced the database to a list of messages that contained the word
					"Wordle" followed by "/6". This is a pretty good heuristic, but it is not perfect, so I
					made sure to add error handling in the frontend to catch any false positives. After this,
					the script processes the new array of wordle messages into a list of objects organized by
					wordle number. Each object holds both users' scores, time sent, full text, and a string
					representing their score grid (such that the above example would become "BBBBG BBBYG YBYYG
					GGYYG").
				</p>
				<p>
					The final step of the backend before translating to JSON is to calculate the likely paths
					each user took to reach their final score. I call this process "reverse solving" and it is
					interesting enough to warrant its own blog post. In summary, I used the wordfreq library
					and the sorted the list of valid wordle words by frequency. The script then finds the most
					likely path by starting at finding the highest frequency word that "makes sense" given the
					player's assumed information and the colors of the current row. Known biases can be added
					to each player (for example, I use the same starting word each day) for more accurate
					information. The result is an approximate but aesthetically useful recreation of the
					user's choices in that game. There are some interesting limitations and edge cases that
					are worth exploring in a future post.
				</p>
				<p>
					The frontend is built with React. This was my first React project, and you can really tell
					if you look at the code. The component structure is brutally inefficient and prop drilling
					is rampant. Luckily the app is not resource intensive or complex enough that this is a
					noticeable problem for the user. I made overexcited use of the framer motion library for
					the animations. In hindsight, I am a mix of proud and embarassed by the end result.
					Certain parts are, in my opinion, quite beautiful and well designed. Other parts are a
					mess. I'm sure you can tell what I mean by looking at it.
				</p>
				<p>
					I don't think I'll revisit the frontend in the future — the code is a mess and the
					problems are not interesting enough to justify the time investment. The backend, however,
					is still interesting and could be expanded in many directions. Since finishing this
					project, the list of all future wordle answers has been published, which trivializes the
					updating process. Further, reverse solving wordles is an interesting enough problem to
					warrant its own webtoy. Lastly, and most importantly, it would be nice if a new set of
					wordle scores could be added without requiring a download or React build on the user's
					part. I'm not sure if a user would be willing to upload their entire text history to some
					rando's website, but it would absolutely be doable in-browser. Maybe some middle ground
					could be found? We'll have to see.
				</p>
			</div>
		);
	},
};

export default WordleViewer;