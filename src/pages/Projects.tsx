/** @format */

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { motion } from "framer-motion";
import "./styles/Projects.css";
import ProjectImage from "../assets/4n2.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import ThemeOptions from "../themes";
declare module "@mui/material/styles" {
	interface ThemeOptions {
		themeName?: string; // optional
	}
}
const theme = createTheme(ThemeOptions);
const colors = [
	theme.palette.success.main,
	theme.palette.primary.main,
	theme.palette.secondary.main,
	theme.palette.error.main,
	theme.palette.info.main,
];
const titles: string[] = ["Project1", "Project2", "Project3", "Project4", "Project5", "Project6", "Project7"];
interface Project {
	title: string;
	number: number;
	image: string;
	description: string;
}
interface projectData {
	[key: string]: Project;
}
const projects: projectData = {
	Project1: { title: "Project 1dfsfsdfsdsfs", number: 1, image: ProjectImage, description: "Bla bla bla" },
	Project2: { title: "Project 2", number: 2, image: ProjectImage, description: "Bla bla bla" },
	Project3: { title: "Project 3", number: 3, image: ProjectImage, description: "Bla bla bla" },
	Project4: { title: "Project 4", number: 4, image: ProjectImage, description: "Bla bla bla" },
	Project5: { title: "Project 5", number: 5, image: ProjectImage, description: "Bla bla bla" },
	Project6: { title: "Project 6", number: 6, image: ProjectImage, description: "Bla bla bla" },
	Project7: { title: "Project 7", number: 7, image: ProjectImage, description: "Bla bla bla" },
};

//need some sort of alternative animated grid, will make a difference
// This might work great https://github.com/mikemajara/react-spring-animated-grid
// Alternatively I could just hide other elements on the same row? Could be equally good

function ProjectCard({
	selected,
	project,
	handleClick,
	mobile,
}: {
	selected: number;
	project: Project;
	handleClick: Function;
	mobile: boolean;
}) {

	const [show, setShow] = useState(true);
	const [size, setSize] = useState(4);
	const [description, setDescription] = useState(false);
	const itemNumber = project.number;

	useEffect(() => {
		if (selected === itemNumber) {
			const newSize = mobile ? 12 : 10;
			setSize(newSize);
			setTimeout(() => {
				setDescription(true);
			}, 150);
		} else if (Math.floor((selected - 1) / 3) === Math.floor((itemNumber - 1) / 3) && selected !== 0) {
			const newSize = mobile ? 4 : 1;
			setSize(newSize);
			setDescription(false);
		} else {
			setShow(true);
			setSize(4);
			setDescription(false);
		}
	}, [selected]);
	function clicked() {
		handleClick(itemNumber);
	}

	return (
		<Grid
			xs={size}
			style={{
				transition: theme.transitions.create("all", {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
			}}>
			<Paper
				elevation={2}
				onClick={clicked}
				className='projectCard'
				style={{
					background: colors[itemNumber % 5],
				}}>
				{show ? <img src={ProjectImage} alt='Project' className='projectImg' /> : null}
				{description ? (
					    <motion.div
						className="projectDescription"
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
					  >
						<h1>
							<b>{project.title}</b>
						</h1>
						<div>{project.description}</div>
					</motion.div>
				) : null}
			</Paper>
		</Grid>
	);
}

function Projects() {
	const [selected, setSelected] = useState(0);
	const mobile = useMediaQuery("(max-width:900px)");

	//If selected == Projects, big mode. If selected !== projects, small mode.
	function onClick(item: number) {
		if (selected === item) {
			setSelected(0);
		} else {
			selected === item ? setSelected(0) : setSelected(item);
		}
	}

	return (
		<div
		className="container Projects">
			<h1> Projects </h1>
			<ThemeProvider theme={theme}>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={mobile ? 2 : 5}>
						{titles.map((title) => {
							return (
								<ProjectCard
									key={title}
									selected={selected}
									project={projects[title]}
									handleClick={onClick}
									mobile={mobile}
								/>
							);
						})}
					</Grid>
				</Box>
			</ThemeProvider>
		</div>
	);
}

export default Projects;
