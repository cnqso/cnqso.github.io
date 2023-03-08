/** @format */

import { useState, useContext } from "react";
import { PageContext, PageContextType } from "../App";

function NavButton({ destination, set }: { destination: PageContextType; set: Function }) {
    const value = useContext<PageContextType>(PageContext);
    const fontColor = value === destination ? "#b3b3ff" : "white";
	return (
		<div onClick={() => set(destination)} className='NavButton card' style={{color: fontColor}}>
			 {destination}
		</div>
	);
}

export default NavButton;
