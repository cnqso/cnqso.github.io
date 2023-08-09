/** @format */
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Reorder } from "framer-motion";
import "./styles/Contact.css";
import { useReward } from "react-rewards";

function PhoneNumber() {
	const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const [confettied, setConfettied] = useState<boolean>(false);
	const itemKeys = [0, 1, 3, 3, 5, 6, 6, 6, 6, 8];
	// No cheating
	const answer = [0, 5, 8, 6, 3, 3, 6, 6, 1, 6];
	const { reward, isAnimating } = useReward("rewardId", "confetti");
	for (let i = 0; i < 10; i++) {
		if (itemKeys[items[i]] !== answer[9 - i]) {
			if (confettied) {
				setConfettied(false);
			}
			break;
		}
		if (i === 9 && !confettied) {
			setConfettied(true);
			reward();
		}
	}
	return (
		<>
			<Reorder.Group axis='x' values={items} onReorder={setItems}>
				{items.map((item, index) => {
					let color = "white";
					if (itemKeys[item] === answer[9 - index]) {
						color = "#666eff";
					}

					return (
						<Reorder.Item style={{ color: color }} key={item} value={item}>
							<span style={{ color: color }}>{itemKeys[item]}</span>
						</Reorder.Item>
					);
				})}
			</Reorder.Group>
			<span id='rewardId' />
		</>
	);
}

function Contact() {
	const [state, handleSubmit] = useForm("mwkdlvew");
	return (
		<div className='container Contact'>
			<h1>Contact</h1>
			<div className='blurb'>
				You can email me at my gmail address, <code>WiMiKelly</code>
				<br />
				Alternatively, you can just send me a message using the form below
			</div>
			{!state.succeeded ? (
				<form onSubmit={handleSubmit} className='form-container'>
					<label htmlFor='email' className='form-label'>
						Email Address
					</label>
					<input id='email' type='email' name='email' className='form-input' />
					<ValidationError
						prefix='Email'
						field='email'
						errors={state.errors}
						className='form-error'
					/>
					<textarea id='message' name='message' className='form-textarea' />
					<ValidationError
						prefix='Message'
						field='message'
						errors={state.errors}
						className='form-error'
					/>
					<button type='submit' disabled={state.submitting} className='form-submit'>
						Submit
					</button>
				</form>
			) : (
				<div style={{ textAlign: "center", marginTop: "50px" }}>
					<img
						style={{ height: "100px", width: "auto" }}
						src='/android-chrome-192x192.png'
						alt='Icon'
					/>
					<br />
					Thank you for your message!
				</div>
			)}
			<br />
			<br />
			<div className='blurb'>
				You can also text me at my personal number:
				<PhoneNumber />
			</div>
		</div>
	);
}

export default Contact;
