/** @format */

import { useState, useContext } from "react";
import { PageContext, PageContextType } from "../App";
import { Link, useLocation } from "react-router-dom";

function NavButton({ destination }: { destination: PageContextType }) {
	const location = useLocation().pathname.replace("%20", " ");
	const fontColor = location === `/${destination}/` ? "#b3b3ff" : "white";

	return (
		<Link to={`${destination}/`} className='NavButton card' style={{color: fontColor}}>
			 {destination}
		</Link>
	);
}

export default NavButton;
