/** @format */

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { motion, Reorder, AnimatePresence } from "framer-motion";
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
	},
	Project2: {
		title: "Project 2",
		number: 2,
		image: ProjectImage,
		description: "Bla bla bla",
		technologies: ["Javascript"],
		date: new Date(2022, 0, 2),
	},
	Project3: {
		title: "Project 3",
		number: 3,
		image: ProjectImage,
		description: "Bla bla bla",
		technologies: ["Javascript", "Python"],
		date: new Date(2022, 0, 3),
	},
	Project4: {
		title: "Project 4",
		number: 4,
		image: ProjectImage,
		description: "Bla bla bla",
		technologies: ["Javascript", "React", "GCP"],
		date: new Date(2022, 0, 4),
	},
	Project5: {
		title: "Project 5",
		number: 5,
		image: ProjectImage,
		description: "Bla bla bla",
		technologies: ["Javascript", "React", "GCP"],
		date: new Date(2022, 0, 5),
	},
	Project6: {
		title: "Project 6",
		number: 6,
		image: ProjectImage,
		description: "Bla bla bla",
		technologies: ["Javascript", "React", "GCP"],
		date: new Date(2022, 0, 6),
	},
	Project7: {
		title: "Project 7",
		number: 7,
		image: ProjectImage,
		description: "Bla bla bla",
		technologies: ["Python", "GCP"],
		date: new Date(2022, 0, 7),
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

	return (
		<div className='sortBox'>
			<h3>Filter:</h3>
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
	const widths = ["5%", "31%", "83%"]

	function clicked() {
		handleClick(itemNumber);
	}

	return (
		<motion.li
			className='projectCard2'
			style={{ background: colors[project.number % 5], width: widths[size] }}
			key={project.title}
			initial={{ scale: 0 }}
			animate={{
				scale: 1,
			}}
			exit={{
				opacity: 0,
				transition: { delay: 0.5 },
			}}
			layout>


				<img src={ProjectImage} alt='Project' className='projectImg' />
				{size === 2 ? 
				<div className='details'>
					<span className='name'>Name: {project.title}</span>
					<span className='email'>Email: {project.description}</span>
				</div> : null}




		</motion.li>
	);
}

function ProjectGrid({ titles }: { titles: string[] }) {
	const [items, setItems] = useState<string[]>(titles);
	const [selected, setSelected] = useState<string>("Project2");

	const shuffle = () => {
		const shuffled = [];
		while (items.length > 0) {
			let i = (Math.random() * items.length) | 0;
			shuffled.push(items[i]);
			items.splice(i, 1);
		}
		setItems([...shuffled]);

		console.log("shuffle");
	};

	// When an item is clicked, set it to the selected item
	// On every render, find the row of the selected item
	// On that row, make the selected item big and all others small
	// We can do this by manually generating the CSS styling for each item on render
	const itemsSize: number[] = [];

	//Set up every one
	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		if (item === selected) {
			itemsSize.push(2);
			//This is the selected item
			//Make it big
			//Make the rest small
		} else if (Math.floor(i / 3) === Math.floor(items.indexOf(selected) / 3)) {
			itemsSize.push(0);
			//This is on the same row as the selected item
			//Make it small
		} else {
			itemsSize.push(1);
		}
	}

	return (
		<div>
			<div className='blurb'>
				<button onClick={shuffle}>shuffle</button>
			</div>

			<ul className='wrapper'>
				<AnimatePresence>
					{items.map((item, index) => (
						<ProjectCard
							key={item}
							projectName={item}
							size={itemsSize[index]}
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
