import React, { useEffect, useRef, useState } from "react";
import Collapse from "@mui/material/Collapse";
import "highlight.js/styles/shades-of-purple.css";
import hljs from "highlight.js";
import systemDiagram1 from "./images/systemDiagram1.png";
import systemDiagram2 from "./images/systemDiagram2.png";
import systemDiagram3 from "./images/systemDiagram3.png";
import systemDiagram4 from "./images/systemDiagram4.png";
import systemDiagram5 from "./images/systemDiagram5.png";
import codeImg1 from "./images/codeImg1.png";
import codeImg2 from "./images/codeImg2.png";



// The footnote component can accept any JSX element or string as a child
// The num prop
export function Footnote({
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

export function CodeBlock({ code, language = "C" }: { code: string, language?: string }) {
	let borderColor = "0ff";

	let styles = {
		padding: 10,
		margin: 0,
		borderRadius: "0 0 2px 2px",
		borderTop: "solid 1px " + borderColor,
		whiteSpace: "pre-wrap",
		backgroundColor: "#222",
	};
	useEffect(() => {
		hljs.highlightAll();
	});

	return (
		<div>
			<pre>
				<code className={language.toLowerCase()}>{code}</code>
			</pre>
		</div>
	);
}