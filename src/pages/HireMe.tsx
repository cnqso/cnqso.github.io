/** @format */

import { useState, useContext } from "react";
import "./styles/HireMe.css";
import { motion } from "framer-motion";
import { SanityContext } from "../App";
import type { Project, Resume, Technology, Education, Experience } from "../types";
import {Link} from "react-router-dom";

function Skills({ items, large }: { items: string[]; large?: boolean }) {
	return (
		<div className="skills">
			{items.map((skill: string) => (
				<Link to={`/Projects?tech=${skill}`} className={large ? "largeSkill" : "skill"} key={skill}>
					{skill}
				</Link>
			))}
		</div>
	);
}

function ProjectEntry({ project }: { project: Project }) {
	return (
		<div className='sectionContent'>
			<div className='sectionContentTitle'>
				{project.title}
				<div className='sectionContentLinks'>
					{project.liveLink && (
						<span className='projectLink fancyLink'>
							<a href={project.liveLink} target='_blank'>
								Live
							</a>
						</span>
					)}
					{project.githubLink && (
						<span className='projectLink fancyLink'>
							<a href={project.githubLink} target='_blank'>
								Github
							</a>
						</span>
					)}
					{project.blogLink && (
						<span className='projectLink fancyLink'>
							<a href={project.blogLink} target='_blank'>
								Blog
							</a>
						</span>
					)}
				</div>
			</div>

				<Skills items={project.technologies} />

			<div className='sectionContentProse'>{project.description}</div>
		</div>
	);
}

function EducationEntry({ education }: { education: Education }) {
	return (
		<div className='sectionContent'>
			<div className='sectionContentTitle'>
				{education.school}
				<div className='sectionContentTime'>
					{new Date(education.graduation).toLocaleString("default", {
						month: "short",
						year: "numeric",
					})}
				</div>
			</div>
			<div className='sectionContentSubtitle'>
				{education.degree} — <span style={{ fontStyle: "italic" }}>{education.distinction}</span>
			</div>

			<ul className='sectionContentBullets'>
				{education.bulletPoints.map((point: string) => {
					return <li key={point}>{point}</li>;
				})}
			</ul>
		</div>
	);
}

function ExperienceEntry({ job }: { job: Experience }) {
	return (
		<div className='sectionContent'>
			<div className='sectionContentTitle'>
				{job.title}
				<div className='sectionContentTime'>
					{new Date(job.start).toLocaleString("default", {
						month: "short",
						year: "numeric",
					})}
					{" – "}
					{job?.end
						? new Date(job.end).toLocaleString("default", {
								month: "short",
								year: "numeric",
						  })
						: "Present"}
				</div>
			</div>
			<div className='sectionContentSubtitle'>
				{job.company} — {job.location}
			</div>

			<ul className='sectionContentBullets'>
				{job.bulletPoints.map((point: string) => {
					return <li key={point}>{point}</li>;
				})}
			</ul>
		</div>
	);
}

function HireMe() {
	const data = useContext(SanityContext);
	if (data?.resume?.name) {
		const resume = data.resume;
		return (
			<div className='container HireMe'>
				<div className='blurb'>
					{resume.byline.map((line: string) => {
						return <p key={line}>{line}</p>;
					})}
				</div>

				<div className='resumeLinks'>
					<span className='resumeLink fancyLink'>
						<a href={resume.github} target='_blank'>
							Github
						</a>
					</span>
					<span className='resumeLink fancyLink'>
						<a href={resume.linkedin} target='_blank'>
							LinkedIn
						</a>
					</span>
					<span className='resumeLink fancyLink'>
						<a href={resume.contact} target='_blank'>
							Contact
						</a>
					</span>
				</div>
				<hr />

				<div className='resumeSection'>
					<div className='sectionTitle'>Projects</div>

					{resume.projects.map((project: Project) => (
						<ProjectEntry key={project.title} project={project} />
					))}
				</div>

				<hr />

				<div className='resumeSection'>
					<div className='sectionTitle'>Skills</div>
					<div className='sectionContent'>
						{/* <div className='sectionContentTitle'>Technologies</div> */}
						<div className='skills'>
							<Skills items={resume.skills} large={true} />
						</div>
					</div>
				</div>
				<hr />

				<div className='resumeSection'>
					<div className='sectionTitle'>Education</div>
					{resume.education.map((education: Education) => (
						<EducationEntry key={education.degree} education={education} />
					))}
				</div>

				<hr />

				<div className='resumeSection'>
					<div className='sectionTitle'>Experience</div>
					{resume.experience.map((job: Experience) => (
						<ExperienceEntry key={job.title} job={job} />
					))}
				</div>

				<br />
			</div>
		);
	} else {
		return <div style={{ height: "110vh" }} />;
		// This is done so that the scrollbar appears before the content loads. Prevents an ugly jump.
	}
}

export default HireMe;
