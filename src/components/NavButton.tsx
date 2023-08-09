/** @format */

import type { PageContextType } from "../types";
import { Link, useLocation } from "react-router-dom";

function NavButton({ destination }: { destination: PageContextType }) {
	const loc = useLocation().pathname.replace("%20", " ");

	const fontColor = destination
		? `/${destination}` === loc
			? "#c3c3ff"
			: ""
		: loc === "" || loc === "/"
		? "#c3c3ff"
		: "";
	// Functional!

	return (
		<Link to={`${destination}`} className='NavButton card' style={{ color: fontColor }}>
			{destination ? destination : "Home"}
		</Link>
	);
}

export default NavButton;
