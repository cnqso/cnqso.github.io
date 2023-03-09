/** @format */

import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./styles/Projects.css";
import ProjectImage from "../assets/4n2.png";
import { deepPurple } from '@mui/material/colors';
import { styled, createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
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
	function clicked() {
		handleClick(itemNumber);
	}
	const theme = useTheme();
	return (
		<ThemeProvider theme={customTheme}>
		<Grid item xs={selected === itemNumber ? 13 : 4}  style={{transition: theme.transitions.create("all", {
			easing: theme.transitions.easing.sharp, 
			duration: theme.transitions.duration.leavingScreen,
	})}}>
			<div onClick={clicked} className='projectCard'>
				<h1>Project {itemNumber}</h1>
			</div>
		</Grid>
		</ThemeProvider>
	);
}

function Projects() {
	const [count, setCount] = useState(0);
	const [selected, setSelected] = useState(0);

	//If selected == Projects, big mode. If selected !== projects, small mode.
	function onClick(item: number) {
		selected === item ? setSelected(0) : setSelected(item);
	}

	return (
		<div className='Projects'>
			<h1> Projects </h1>
			<ThemeProvider theme={customTheme}>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<ProjectCard selected={selected} itemNumber={1} handleClick={setSelected} />
					<ProjectCard selected={selected} itemNumber={2} handleClick={setSelected} />
					<ProjectCard selected={selected} itemNumber={3} handleClick={setSelected} />
					<ProjectCard selected={selected} itemNumber={4} handleClick={setSelected} />
					<ProjectCard selected={selected} itemNumber={5} handleClick={setSelected} />
				</Grid>
			</Box>
			</ThemeProvider>
		</div>
	);
}

export default Projects;
