/** @format */

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./styles/Projects.css";
import ProjectImage from "../assets/4n2.png";
import { deepPurple } from '@mui/material/colors';
import { styled, createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import GridLayout from "react-grid-layout";

//need some sort of alternative animated grid, will make a difference
// This might work great https://github.com/mikemajara/react-spring-animated-grid
// Alternatively I could just hide other elements on the same row? Could be equally good

declare module '@mui/material/styles/createTheme' {
    interface ThemeOptions {    
        themeName?: string  // optional
    }
}

  const customTheme = createTheme({
	palette: {
	  primary: {
		main: deepPurple[500],
	  },
	},
  });


function ProjectCard({
	selected,
	itemNumber,
	handleClick,
}: {
	selected: number;
	itemNumber: number;
	handleClick: Function;
}) {
	const [show, setShow] = useState(true);
	const [size, setSize] = useState(4);
	const [description, setDescription] = useState(false);
	// cool idea: give every card background a different nice color, that way we can remove the picture instead of shrinking
	useEffect(() => {
		if (selected === itemNumber) {
			setSize(10)
			setTimeout(() => {setDescription(true)}, 300)
		} else if (Math.floor((selected-1) / 3) === Math.floor((itemNumber-1) / 3) && selected !== 0) {
			setSize(0.9);
			setDescription(false)
		} else {
			setShow(true);
			setSize(4);
			setDescription(false)
		}
	}, [selected]);
	function clicked() {
		handleClick(itemNumber);
	}
	const theme = useTheme();


	return (
		<>
		{show ?
		<Grid item xs={size}  style={{transition: theme.transitions.create("all", {
			easing: theme.transitions.easing.sharp, 
			duration: theme.transitions.duration.leavingScreen,
	})}}>			

			<div onClick={clicked} className='projectCard'>
				<img src={ProjectImage} alt='Project' className='projectImg'/>
				{description ? 
				<div className="projectDescription">
					<div style={{fontSize: '3em'}}><b>Project {itemNumber}</b></div>
					<div>Bla bla bla bla bla </div>
				</div> : null}
			</div>
			</Grid>
		: null}</>
	);
}

function Projects() {
	const [count, setCount] = useState(0);
	const [selected, setSelected] = useState(0);
	const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	//If selected == Projects, big mode. If selected !== projects, small mode.
	function onClick(item: number) {
		if (selected === item) {
			setSelected(0);
		} else {
		selected === item ? setSelected(0) : setSelected(item);
		}
	}

	return (
		<div className='Projects'>
			<h1> Projects </h1>
			<ThemeProvider theme={customTheme}>
				
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={5}>
				
					<ProjectCard selected={selected} itemNumber={1} handleClick={onClick} />
					<ProjectCard selected={selected} itemNumber={2} handleClick={onClick} />
					<ProjectCard selected={selected} itemNumber={3} handleClick={onClick} />
					<ProjectCard selected={selected} itemNumber={4} handleClick={onClick} />
					<ProjectCard selected={selected} itemNumber={5} handleClick={onClick} />
					
				</Grid>
			</Box>
			</ThemeProvider>
		</div>
	);
}

export default Projects;
