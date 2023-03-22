/** @format */

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { motion, Reorder, AnimatePresence } from "framer-motion";
import { Collapse } from '@mui/material';
import "./styles/Projects.css";
import ProjectImage from "../assets/4n2.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import type { technologies } from "../App";
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

interface Project {
	title: string;
	number: number;
	image: string;
	description: string;
	technologies: technologies[];
	date: Date;
	liveLink: string;
	githubLink: string;
	blogLink: string;
}
interface projectData {
	[key: string]: Project;
}
const projects: projectData = {
	Project1: {
		title: "Project 1dfsfsdfsdsfs",
		number: 1,
		image: ProjectImage,
		description: "Bla bla bla",
		technologies: ["Javascript", "React", "NLP"],
		date: new Date(2022, 0, 1),
		liveLink: "https://www.google.com",
		githubLink: "https://www.google.com",
		blogLink: "https://www.google.com",
	},
	Project2: {
		title: "Project 2",
		number: 2,
		image: ProjectImage,
		description: "Bla bla bla",
		technologies: ["Javascript"],
		date: new Date(2022, 0, 2),
		liveLink: "https://www.google.com",
		githubLink: "https://www.google.com",
		blogLink: "https://www.google.com",
	},
	Project3: {
		title: "Project 3",
		number: 3,
		image: ProjectImage,
		description: "Bla bla bla",
		technologies: ["Javascript", "Python"],
		date: new Date(2022, 0, 3),
		liveLink: "https://www.google.com",
		githubLink: "https://www.google.com",
		blogLink: "https://www.google.com",
	},
	Project4: {
		title: "Project 4",
		number: 4,
		image: ProjectImage,
		description: "Bla bla bla",
		technologies: ["Javascript", "React", "GCP"],
		date: new Date(2022, 0, 4),
		liveLink: "https://www.google.com",
		githubLink: "https://www.google.com",
		blogLink: "https://www.google.com",
	},
	Project5: {
		title: "Project 5",
		number: 5,
		image: ProjectImage,
		description: "Bla bla bla",
		technologies: ["Javascript", "React", "GCP"],
		date: new Date(2022, 0, 5),
		liveLink: "https://www.google.com",
		githubLink: "https://www.google.com",
		blogLink: "https://www.google.com",
	},
	Project6: {
		title: "Project 6",
		number: 6,
		image: ProjectImage,
		description: "Bla bla bla",
		technologies: ["Javascript", "React", "GCP"],
		date: new Date(2022, 0, 6),
		liveLink: "https://www.google.com",
		githubLink: "https://www.google.com",
		blogLink: "https://www.google.com",
	},
	Project7: {
		title: "Project 7",
		number: 7,
		image: ProjectImage,
		description: "Bla bla bla",
		technologies: ["Python", "GCP"],
		date: new Date(2022, 0, 7),
		liveLink: "https://www.google.com",
		githubLink: "https://www.google.com",
		blogLink: "https://www.google.com",
	},
};

const allTechnologies: technologies[] = [
	"Javascript",
	"Python",
	"React",
	"Typescript",
	"GCP",
	"OpenAI APIs",
	"NoSQL",
	"Firebase",
	"Node",
	"Material UI",
	"NLP",
];

//need some sort of alternative animated grid, will make a difference
// This might work great https://github.com/mikemajara/react-spring-animated-grid
// Alternatively I could just hide other elements on the same row? Could be equally good

function SortBox({
	filter,
	setFilter,
	sort,
	setSort,
}: {
	filter: technologies[];
	setFilter: (filter: technologies[]) => void;
	sort: string;
	setSort: (sort: string) => void;
}) {
	const sortOptions: string[] = ["Pride", "New", "Old", "Alphabetical"];
	const [show, setShow] = useState<boolean>(false);

	function handleFilterClick(option: technologies) {
		const newFilter = [...filter];
		if (newFilter.includes(option)) {
			const indexToRemove = newFilter.indexOf(option);
			newFilter.splice(indexToRemove, 1);
		} else {
			newFilter.push(option);
		}
		setFilter(newFilter);
	}

	function handleSortClick(option: string) {
		setSort(option);
	}

	function showButton(){
		setShow(!show);
	}

	return (
		<>
			<button onClick={showButton}>Filter projects</button>
			
			<Collapse in={show} timeout='auto' unmountOnExit>
			<div className='sortBox'>
				<div>
			<h3>Filter by:</h3>
			<div className='sortOptions'>
				{allTechnologies.map((option, index) => {
					let color = "#2e2e2e";
					if (filter.includes(option)) {
						color = "#666eff";
					}
					return (
						<span
							key={option}
							onClick={() => handleFilterClick(option)}
							style={{ background: color }}
							className='sortOption'>
							{option}
						</span>
					);
				})}
			</div>
			</div>
			<div>
			<h3>Sort by:</h3>
			<div className='sortOptions'>
				{sortOptions.map((option) => {
					let color = "#2e2e2e";
					if (sort === option) {
						color = "#666eff";
					}
					return (
						<span
							key={option}
							onClick={() => handleSortClick(option)}
							style={{ background: color }}
							className='sortOption'>
							{option}
						</span>
					);
				})}
			</div>
			</div>
			</div>
			</Collapse>
		
		</>
	);
}

function ProjectCard({
	projectName,
	handleClick,
	size,
}: {
	projectName: string;
	handleClick: Function;
	size: number;
}) {
	const [show, setShow] = useState(true);
	const [description, setDescription] = useState(false);
	const project = projects[projectName];
	const itemNumber = project.number;
	const widths = ["thin", "normal", "wide"];
	const className = `projectCard ${widths[size]}`;
	function clicked() {
		if (size === 2) {
			handleClick("");
		} else {
			handleClick(projectName);
		}
	}

	return (
		<motion.li
			className={className}
			style={{ background: colors[project.number % 5] }}
			key={project.title}
			initial={{ scale: 0 }}
			animate={{
				scale: 1,
			}}
			exit={{
				scale: 0,
				transition: { duration: 0.1 },
			}}
			layout>
			{size === 0 ? (
				<div style={{ height: "100%", cursor: "pointer" }} onClick={() => clicked()} />
			) : (
				<img src={ProjectImage} onClick={() => clicked()} alt='Project' className='projectImg' />
			)}
			{size === 2 ? (
				<motion.div
					className='projectDescription'
					initial={{ x: -300, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{
						opacity: 0,
						transition: {},
					}}>
					<h1>
						<b>{project.title}</b>
					</h1>
					<div>{project.description}</div>
					<div className="projectLinks">
						<span><a href={project.liveLink}>Live</a>  </span>
						<span> <a href={project.githubLink}>Github</a> </span>
						<span> <a href={project.blogLink}>Writeup</a> </span>
					</div>
				</motion.div>
			) : null}
		</motion.li>
	);
}
//Github, Live, Writeup

function ProjectGrid({ titles }: { titles: string[] }) {
	const [selected, setSelected] = useState<string>("");

	// When an item is clicked, set it to the selected item
	// On every render, find the row of the selected item
	// On that row, make the selected item big and all others small
	// We can do this by manually generating the CSS styling for each item on render
	const titlesSize: number[] = [];

	//Set up every one
	for (let i = 0; i < titles.length; i++) {
		const item = titles[i];
		if (item === selected) {
			titlesSize.push(2);
			//This is the selected item
			//Make it big
			//Make the rest small
		} else if (Math.floor(i / 3) === Math.floor(titles.indexOf(selected) / 3)) {
			titlesSize.push(0);
			//This is on the same row as the selected item
			//Make it small
		} else {
			titlesSize.push(1);
		}
	}

	return (
		<div>
			<ul className='wrapper'>
				<AnimatePresence initial={false} mode={"popLayout"}>
					{titles.map((item, index) => (
						<ProjectCard
							key={item}
							projectName={item}
							size={titlesSize[index]}
							handleClick={setSelected}
						/>
					))}
				</AnimatePresence>
			</ul>
		</div>
	);
}

function Projects() {
	const [filter, setFilter] = useState<technologies[]>([]);
	const [sort, setSort] = useState<string>("Pride");
	const [selected, setSelected] = useState(0);
	const mobile = useMediaQuery("(max-width:900px)");
	function onClick(item: number) {
		if (selected === item) {
			setSelected(0);
		} else {
			selected === item ? setSelected(0) : setSelected(item);
		}
	}
	const allTitles = Object.keys(projects);
	let titles: string[] = [];

	if (filter.length === 0) {
		titles = allTitles;
	} else {
		titles = allTitles.filter((title) => {
			const project = projects[title];
			const technologies = project.technologies;
			for (let i = 0; i < filter.length; i++) {
				if (!technologies.includes(filter[i])) {
					return false;
				}
			}
			return true;
		});
	}

	titles.sort((a: string, b: string): number => {
		const projectA = projects[a];
		const projectB = projects[b];
		if (sort === "New") {
			return projectB.number - projectA.number;
		} else if (sort === "Old") {
			return projectA.number - projectB.number;
		} else {
			return 0;
		}
	});

	// SORT COMPONENT:
	// Start small, "Sort by:" and then a dropdown cabinet
	// Give a list of all the technologies. When each is clicked, it gets highlighted and it sorts. Allow sorting by multiple
	// Maybe also organize order: personal favorite, newest, oldest, name

	return (
		<div className='container Projects'>
			<h1> Projects </h1>

			<SortBox filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
			<ThemeProvider theme={theme}>
				<ProjectGrid titles={titles} />
			</ThemeProvider>
		</div>
	);
}

export default Projects;
