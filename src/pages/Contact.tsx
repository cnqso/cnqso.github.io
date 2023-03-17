/** @format */
import React, { useState, ChangeEvent, FormEvent } from "react";
import ProjectsPreview from "./previews/ProjectsPreview";
import BlogPreview from "./previews/BlogPreview";
import HireMePreview from "./previews/HireMePreview";
import { motion, Reorder, AnimatePresence, LayoutGroup } from "framer-motion";
import "./styles/Contact.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";
import { styled, createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import ThemeOptions from "../themes";
declare module "@mui/material/styles" {
	interface ThemeOptions {
		themeName?: string; // optional
	}
}
const theme = createTheme(ThemeOptions);

interface IFormInput {
	name: string;
	email: string;
	message: string;
}

function PhoneNumber() {
	const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const itemKeys = [0, 1, 3, 3, 5, 6, 6, 6, 6, 8];
	const answer = [0, 5, 8, 6, 3, 3, 6, 6, 1, 6];
	return (
		<Reorder.Group axis='x' values={items} onReorder={setItems}>
			{items.map((item, index) =>{ 
				let color = "white";
				if (itemKeys[item] === answer[9-index]) {
					color = "#666eff";
				}
				
				return (
				<Reorder.Item style={{color:color}} key={item} value={item}>
					<span style={{color:color}}>{itemKeys[item]}</span>
				</Reorder.Item>
			)})}
		</Reorder.Group>
	);
}

function Contact() {
	const [formInput, setFormInput] = useState<IFormInput>({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
	const [submissionError, setSubmissionError] = useState<boolean>(false);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		setFormInput((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);
		setSubmissionSuccess(false);
		setSubmissionError(false);
		try {
			const response = await fetch("https://formsubmit.co/d166b1a93693ca8e0027e61a19444137", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formInput),
			});

			setIsSubmitting(false);

			if (response.ok) {
				setSubmissionSuccess(true);
				setFormInput({
					name: "",
					email: "",
					message: "",
				});
			} else {
				setSubmissionError(true);
			}
		} catch (error) {
			setIsSubmitting(false);
			setSubmissionError(true);
		}
	};

	return (
		<div>
			<ThemeProvider theme={theme}>
				<h1>Contact</h1>
				<div className='blurb'>
					You can email me at my gmail address, <code>WiMiKelly</code>
					<br />
					Alternatively, you can just send me a message using the form below
				</div>
				{!submissionSuccess ? (
					<form onSubmit={handleSubmit}>
						<TextField
							name='name'
							label='Name'
							variant='outlined'
							fullWidth
							error={submissionError}
							margin='normal'
							value={formInput.name}
							onChange={handleInputChange}
							required
						/>
						<TextField
							name='email'
							label='Email'
							variant='outlined'
							fullWidth
							error={submissionError}
							margin='normal'
							value={formInput.email}
							onChange={handleInputChange}
							required
						/>
						<TextField
							name='message'
							label='Message'
							variant='outlined'
							fullWidth
							error={submissionError}
							margin='normal'
							multiline
							rows={5}
							value={formInput.message}
							onChange={handleInputChange}
							required
						/>
						<Button
							variant='contained'
							type='submit'
							disabled={isSubmitting}
							endIcon={isSubmitting ? <CircularProgress size={20} /> : null}>
							Submit
						</Button>
						{submissionError && (
							<Typography variant='subtitle1' color='error' gutterBottom>
								There was an error submitting the form. I hope you aren't an employer because
								that would be a bad look. If you aren't an employer, why not just email me
								normally? A form is really just a glorified email. Another ornament on your
								website to prove you know how to do it. So much of the internet today is just
								that: little flecks of conspicuous consumption to prove that your company can
								afford a website. Do you really think that
								<a href='https://www.7-eleven.com/'>7-Eleven needs a website</a>? Obviously
								not, nobody is using the 7-eleven website for anything at all. It's doubtless
								a money sink - any paltry gains they might get in revenue are far outmatched
								by the cost of the Next JS devs they employ to keep the website up. In what
								world does the 7-Eleven website need server-side rendering??? But of course,
								if 7-Eleven opted against a website, or perhaps chose to build a minimal,
								elegant, evergreen, &lt;50kb website, it wouldn't fly. What would that say
								about 7-Eleven? People would point and laugh, they would say "this corporation
								can't even afford Next JS devs". "Hahaha look at this corporate website it
								doesn't even have a store locator".{" "}
								<b>
									Nobody has ever needed a store locator!! If you google "7-Eleven", it
									shows you the locations before it shows you the bloated SSR vanity site!!
								</b>
								Maybe I'm excessively bitter about this. After all, 7-Eleven does have a
								points program which requires a log-in page and firm backend and whatnot. I
								guess all I'm saying is that web development seems to put design on the
								backburner for the singleminded pursuit of ornamentation. It feels like most
								websites today are just a bunch of little widgets and little animations and
								little modals that try to get data from you. Every first visit to a website is
								a deluge of cookie banners, privacy policy updates, modals asking you to sign
								up for their newsletter - all of them placed in the corners and edges of the
								screen, pretending that they're out of the way. They're never out of the way.
								The cookie banner is always designed to take up a quarter of the screen at
								every zoom level, the modal breaks the mobile site, an on and on. The worst
								modern phenomenon is the fake customer service chat box in the bottom right of
								the screen. This isn't insidious, it's just dumb. It's always a jumpscare -
								you're reading a page and suddenly a chat box pops up with a notification. You
								thought you were alone, and the illusion is suddenly shattered. Alex wants to
								know if there's anything they can help you with. You have 4 responses to
								choose from. "No" is not one of them.
								<br />
								Web design literally an art form. This seems uncontroversial. Web design could
								be anything. You can make <b>anything</b>. There are functionally no limits to
								what can be accomplished programatically in a browser. WASM magnifies this.
								Why is everyone so inexorably drawn to the same copy-pasted shit? Sure,
								"speed" is important, but if speed is really the most important thing then why
								even write code at all. People obsess over AI replacing programmers, but I
								would be more worried about Squarespace developing an easily modular backend.
								The only thing keeping 500,000+ developers employed is authentication.
								<br />I always come back to the website for the{" "}
								<a href='https://www.youtube.com/watch?v=pJt_cKHcFuw'>
									2016 Bloomberg Businessweek Design Conference
								</a>
								. There was <i>discourse</i> about this back in the day. People said "surely
								this is a joke", and sure, they were right to an extent. Others said it was
								actually a brilliant example of bad design, and that there would be space at
								the conference to collectively critique and find the "flaws" in the website.
								These people, with all due respect, are dumb as rocks. The excitement these
								people had to categorize the "mistakes" like it's spot the difference or
								cinema sins. This view of design as a list of <i>good</i> and <i>bad</i>{" "}
								choices is moronic. This reflexive desire to mummify modernity into an
								immutable and well-studied canon of rules is the death of creativity. It's the
								long-term consequence of the death of Continental philosophy. Maybe there is
								an elite overproduction or Protestant scholarship angle here, but that's a bit
								too deep for me. The point is that the website for the 2016 Bloomberg
								Businessweek Design Conference is cool and interesting. More than that, I
								think it succeeds at being simultaneously good at its task (give information
								on the design conference) and being nice to look at. It is a good website by
								any objective measure you could throw at it, and more than that, objective
								measures are usually a{" "}
								<a href='https://link.springer.com/article/10.1007/s13347-015-0209-8'>
									degenerate proxy
								</a>
								. If you think the website for the 2016 Bloomberg Businessweek Design is bad
								then I respect you, I don't think you're a bad or stupid person, but I think
								you are thinking uncreatively.
							</Typography>
						)}
					</form>
				) : (
					<div>
						<CheckCircleOutlineIcon sx={{ color: "success.main", fontSize: 64 }} />
						<Typography variant='h5' sx={{ textAlign: "center" }}>
							Thank you for your message!
						</Typography>
					</div>
				)}
				<br />
				<br />
				<div className='blurb'>
					You can also text me at my personal number:
					<PhoneNumber />
				</div>
			</ThemeProvider>
		</div>
	);
}

export default Contact;
