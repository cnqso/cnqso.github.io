import React, { useEffect, useRef, useState } from "react";
import Collapse from "@mui/material/Collapse";
import Refractor from "react-refractor";
import js from 'refractor/lang/javascript'
import c from 'refractor/lang/c'
import ts from 'refractor/lang/typescript'
import "../pages/styles/prism.css";
import { PortableText } from "@portabletext/react";
import client from "../client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

// Then register them
Refractor.registerLanguage(js)
Refractor.registerLanguage(c)
Refractor.registerLanguage(ts)


// The footnote component can accept any JSX element or string as a child
// No longer used since migrating to a CMS with portable text, but the code was nice while it lasted
// export function Footnote({
// 	children,
// 	num,
// 	punctuation = ". ",
// }: {
// 	children: JSX.Element | string;
// 	num: number | string;
// 	punctuation?: string;
// }) {
// 	const scrollRef = useRef<HTMLSpanElement>(null);
// 	const [show, setShow] = useState(false);
// 	const scrollBack = () => {
// 		// Scroll back to top of footnote
// 		setShow(false);
// 	};

// 	return (
// 		<>
// 			<span
// 				className={"footnoteButton"}
// 				onClick={() => {
// 					setShow(!show);
// 				}}>
// 				<sup ref={scrollRef} style={{ color: "#de731d" }}>
// 					[{num}]
// 				</sup>
// 				{punctuation}
// 			</span>

// 			<Collapse in={show} timeout='auto' unmountOnExit>
// 				<div className='footnote'>
// 					<div
// 						className='footnoteButton'
// 						onClick={() => {
// 							setShow(false);
// 						}}
// 						style={{ textAlign: "center", marginTop: 0, fontSize: "2em" }}>
// 						<b>^</b>
// 					</div>

// 					{children}
// 				</div>
// 				<div style={{ padding: "30px", cursor: "pointer" }} onClick={scrollBack}>
// 					<hr style={{ borderTop: "1px solid #de731d" }} />
// 				</div>
// 			</Collapse>
// 		</>
// 	);
// }

 function Break(props: any) {
	return <hr/>;
}

 function CodeBlock({ code, language = "c" }: { code: string, language?: string }) {
	if (language === "csharp") {
		language = "c"
	}
	return (
		<Refractor
		// In this example, `props` is the value of a `code` field
		language={language}
		value={code}
	  />
	);
}







 function Footnote(props: any) {
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
					{props.text}
				</sup>
			</span>
			<Collapse in={show} timeout='auto' unmountOnExit>
				<span className='footnote'>
					<span
						className='footnoteButton'
						onClick={() => {
							setShow(false);
						}}
						style={{ textAlign: "center", marginTop: 0, fontSize: "2em" }}>
						<b>^</b>
					</span>

					<PortableText value={props.value.footnoteContent} components={components} />
				</span>
				<span style={{ padding: "30px", cursor: "pointer" }} onClick={scrollBack}>
					<hr style={{ borderTop: "1px solid #de731d" }} />
				</span>
			</Collapse>
			</>
	)
}



 const components = {
	types: {
		codeblock: (props: any) => {
			return (
			<CodeBlock language = {props.value.language} code = {props.value.code}/>
			)
		},
		break: (props: any) => {
			return (
				<Break />
			)
		},
		image: (props: any) => {
			return (
				<img style={{margin: "0 auto"}} src={urlFor(props.value).url()}/>
			)
		}
	},
	marks: {
		footnote: Footnote
	}
};


export default function CustomPortableText ({body}: {body: any}) {
	return (
		<PortableText value={body} components={components} />
	)
}

