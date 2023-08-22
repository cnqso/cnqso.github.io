/** @format */

import { useState } from "react";
import { UnmountClosed } from "react-collapse";
import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import c from "refractor/lang/c";
import ts from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";
import "../pages/styles/prism.css";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../client";
import type {
	PortableTextReactComponents,
} from "@portabletext/react";

// Then register them
Refractor.registerLanguage(js);
Refractor.registerLanguage(c);
Refractor.registerLanguage(ts);
Refractor.registerLanguage(tsx);

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
	return <hr />;
}

function CodeBlock({ code, language = "c" }: { code: string; language?: string }) {
	if (language === "csharp") {
		language = "c";
	}
	return (
		<Refractor
			// In this example, `props` is the value of a `code` field
			language={language}
			value={code}
		/>
	);
}

function Footnote({ text, value }: { text?: string; value?: { footnoteContent: any } }) {
	const [show, setShow] = useState(false);
	return (
		<>
			<span
				className={"footnoteButton"}
				onClick={() => {
					setShow(!show);
				}}>
				<sup style={{ color: "#de731d" }}>{text}</sup>
			</span>
			<UnmountClosed isOpened={show}>
				<span className='footnote'>
					<span
						className='footnoteCloser'
						onClick={() => {
							setShow(false);
						}}
						style={{ marginTop: 0, fontSize: "2em", textAlign: "center" }}>
						<b>^</b>
					</span>

					<PortableText value={value?.footnoteContent} components={components} />
				</span>
				<span
					style={{ padding: "30px", cursor: "pointer" }}
					onClick={() => {
						setShow(false);
					}}>
					<hr style={{ borderTop: "1px solid #de731d" }} />
				</span>
			</UnmountClosed>
		</>
	);
}

const components: Partial<PortableTextReactComponents> = {
	types: {
		codeblock: (props: any) => {
			return <CodeBlock language={props.value.language} code={props.value.code} />;
		},
		break: (props: any) => {
			return <Break />;
		},
		image: (props: any) => {
			return <img style={{ margin: "0 auto" }} src={urlFor(props.value).url()} />;
		},
	},
	marks: {
		footnote: Footnote,
		center: (props) => {
			return (
				<div style={{ textAlign: "center", letterSpacing: 0, lineHeight: "1.2em" }}>
					{props.children}
				</div>
			);
		},
	},
	block: {
		normal: ({ children }) => <div style={{ marginBlock: "22px" }}>{children}</div>,
	},
};

export default function CustomPortableText({ body }: { body: any }) {
	return (
		<div className='textBlock'>
			<PortableText value={body} components={components} />
		</div>
	);
}
