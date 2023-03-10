/** @format */

import { useState, useContext } from "react";
import { PageContext, PageContextType } from "../App";
import { Link } from "react-router-dom";

function NavButton({ destination, set }: { destination: PageContextType; set: Function }) {
    const value = useContext<PageContextType>(PageContext);
    const fontColor = value === destination ? "#b3b3ff" : "white";
	return (
		<Link to={`${destination}/`} className='NavButton card' style={{color: fontColor}}>
			 {destination}
		</Link>

	);
}

export default NavButton;
