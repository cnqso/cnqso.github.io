/** @format */

import { useState, useContext } from "react";
import { PageContext, PageContextType } from "../App";
import { Link, useLocation } from "react-router-dom";

function NavButton({ destination }: { destination: PageContextType }) {
	const location = useLocation().pathname.replace("%20", " ");
	const fontColor = location === `/${destination}/` ? "#c3c3ff" : "";

	return (
		<Link to={`${destination}/`} className='NavButton card' style={{color: fontColor}}>
			 {destination ? destination : "Home"}
		</Link>
	);
}

export default NavButton;
