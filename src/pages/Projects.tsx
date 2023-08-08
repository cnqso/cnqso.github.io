/** @format */

import { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { motion, Reorder, AnimatePresence } from "framer-motion";
import { Collapse } from "@mui/material";
import "./styles/Projects.css";

import useMediaQuery from "@mui/material/useMediaQuery";
import type {Project, Projects, Technology} from "../types";
import {TECHNOLOGIES} from "../types";
import {urlFor} from "../client";
import {SanityContext} from "../App";
import { useLocation } from 'react-router-dom';

const colors = [
	"rgb(102, 110, 255)",
	"rgb(255, 102, 110)",
	"rgb(245, 0, 87)",
	"rgb(102, 186, 255)",
	"rgb(120, 200, 180)",
];


function useQuery() {
  return new URLSearchParams(useLocation().search);
}


function convertArrayToObject(projects: Project[]): Record<string, Project> {
	const result: Record<string, Project> = {};
  
	projects.forEach(project => {
	  const key = `${project._id}`;
	  result[key] = project;
	});
  
	return result;
  }

function SortBox({
	filter,
	setFilter,
	sort,
	setSort,
}: {
	filter: Technology[];
	setFilter: (filter: Technology[]) => void;
	sort: string;
	setSort: (sort: string) => void;
}) {
	const query = useQuery();
	
	
	const sortOptions: string[] = ["Pride", "New", "Old", "Alphabetical"];
	const [show, setShow] = useState<boolean>(query.get("tech") !== null);

	function handleFilterClick(option: Technology) {
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

	function showButton() {
		setShow(!show);
	}

	return (
		<>
			<button onClick={showButton}>Filter and Sort</button>

			<Collapse in={show} timeout='auto' unmountOnExit>
				<div className='sortBox'>
					<div>
						<h3>Filter by:</h3>
						<div className='sortOptions'>
							{TECHNOLOGIES.map((option, index) => {
								let color = document.body.style.backgroundColor;
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
								let color = document.body.style.backgroundColor;
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
	projectObject,
}: {
	projectName: string;
	handleClick: Function;
	size: number;
	projectObject: Projects;
}) {
	const [show, setShow] = useState(true);
	const [description, setDescription] = useState(false);
	const project = projectObject[projectName];
	const itemNumber = project.number;
	const widths = ["thin", "normal", "wide"];
	const widthClass = `projectCard ${widths[size]}`;
	function clicked() {
		if (size === 2) {
			handleClick("");
		} else {
			handleClick(projectName);
		}
	}

	
	return (
		<motion.li
			transition={{
				ease: "easeOut",
				duration: 0.25,
			}}
			className={widthClass}
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
			onClick={() => widthClass === "projectCard thin" && clicked() }
			layout>
			{size === 0 ? (
				// <div style={{ height: "105%", width: "150%", cursor: "pointer" }} onClick={() => clicked()} />
				null
			) : (
				<motion.img src={urlFor(project.image).url()} onClick={() => clicked()} alt='Project' className='projectImg' layout/>
			)}
			{size === 2 ? (
				<motion.div
					transition={{ type: "spring", bounce: 0.25 }}
					className='projectDescription'
					initial={{ x: -50, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{
						opacity: 0,
						transition: {},
					}} >
					<h1>
						<b>{project.title}</b>
					</h1>
					<div>{project.description}</div>
					<div className='projectLinks'>
						{project.liveLink ? (
							<span className="resumeLink">
								<a href={project.liveLink}>Live</a>{" "}
							</span>
						) : null}
						{project.githubLink ? (
						<span className="resumeLink">
							{" "}
							<a href={project.githubLink}>Github</a>{" "}
						</span>) : null }
						{project.blogLink ? (
						<span className="resumeLink">
							{" "}
							<a href={project.blogLink}>Writeup</a>{" "}
						</span>):null}
					</div>
				</motion.div>
			) : null}
		</motion.li>
	);
}


function ProjectGrid({ titles, projectObject }: { titles: string[], projectObject: Projects }) {
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
				<AnimatePresence initial={false} mode={"sync"}>
					{titles.map((item, index) => (
						<ProjectCard
							key={item}
							projectName={item}
							size={titlesSize[index]}
							handleClick={setSelected}
							projectObject={projectObject}
						/>
					))}
				</AnimatePresence>
			</ul>
		</div>
	);
}

function Projects() {
	const data = useContext(SanityContext)
	const projectArray = data?.projects;
	let projectObject: Projects = {};
	if (projectArray) {
		projectObject = convertArrayToObject(projectArray)
	}

	const query = useQuery();
	
	const tech: Technology[] = query.get("tech") ? [query.get("tech") as Technology] : [];
	const [filter, setFilter] = useState<Technology[]>(tech);

	const [sort, setSort] = useState<string>("Pride");
	const [selected, setSelected] = useState(0);
	function onClick(item: number) {
		if (selected === item) {
			setSelected(0);
		} else {
			selected === item ? setSelected(0) : setSelected(item);
		}
	}
	const allTitles = Object.keys(projectObject);
	let titles: string[] = [];

	if (filter.length === 0) {
		titles = allTitles;
	} else {
		titles = allTitles.filter((title) => {
			const project = projectObject[title];
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
		const projectA = projectObject[a];
		const projectB = projectObject[b];
		if (sort === "Pride") {
			return projectA.number - projectB.number;
		} else if (sort === "New") {
			return new Date(projectB.date).getTime() - new Date(projectA.date).getTime();
		} else if (sort === "Old") {
			return new Date(projectA.date).getTime() - new Date(projectB.date).getTime();
		} else if (sort === "Alphabetical") {
			return projectA.title > projectB.title ? 1 : -1;
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

			<ProjectGrid titles={titles} projectObject={projectObject} />
		</div>
	);
}

export default Projects;
