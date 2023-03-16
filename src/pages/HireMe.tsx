/** @format */

import { useState } from "react";
import "./styles/HireMe.css";
import { motion } from "framer-motion";


function Skills() {
	
	const skills: string[] = ["Javascript", "Python", "React", "Google Cloud Platform (GCP)", "OpenAI APIs", "NoSQL", "Firebase", "Node", "Material UI", "Natural Language Processing (NLP)"]

	function skillsList() {
		return skills.map((skill : string) => {
			return (
				<span key={skill} className='skill'>
					{skill}
				</span>
			)
		})
	}

	return (
		<div className='resumeSection'>
		<h2 className='sectionTitle'>Skills</h2>
		<div className='sectionContent'>
			<div className='sectionContentTitle'>Languages</div>
			<div className='skills'>
{skillsList()}			</div>
		</div>
	</div>
	)
}




function HireMe() {
	const [count, setCount] = useState(0);

	return (
		<div className='container HireMe'>
			<div className='blurb'>I am a programmer </div>


			<div className='resumeLinks'>
				<span className='resumeLink'>Projects</span>
				<span className='resumeLink'>Github</span>
				<span className='resumeLink'>LinkedIn</span>
				<span className='resumeLink'>Contact</span>
			</div>
			<hr />

			<div className='resumeSection'>
				<h2 className='sectionTitle'>Projects</h2>
				<div className='sectionContent'>
					<div className='sectionContentTitle'>Commons</div>
					<div className='sectionContentSubtitle'>
						Javascript, React, Google Cloud Platform (GCP), Firebase, Node, NoSQL, Material UI
					</div>
					<div className='sectionContentTime'>
						<span className='resumeLink'>Live</span>
						<span className='resumeLink'>Github</span>
						<span className='resumeLink'>Writeup</span>
					</div>
					<div className='sectionContentProse'>
						A sim-city-like application in which many anonymous users must collaborate with each
						other
					</div>
				</div>
				<div className='sectionContent'>
					<div className='sectionContentTitle'>Wordle Viewer</div>
					<div className='sectionContentSubtitle'>
						Javascript, React, Python, SQL, Natural Language Processing (NLP),
					</div>
					<div className='sectionContentTime'>
						<span className='resumeLink'>Live</span>
						<span className='resumeLink'>Github</span>
						<span className='resumeLink'>Writeup</span>
					</div>
					<div className='sectionContentProse'>
						An app which extracts and displays a history of wordle scores from an iPhone backup
						file
					</div>
				</div>
				<div className='sectionContent'>
					<div className='sectionContentTitle'>Spirals</div>
					<div className='sectionContentSubtitle'>Javascript, React, Material UI</div>
					<div className='sectionContentTime'>
						<span className='resumeLink'>Live</span>
						<span className='resumeLink'>Github</span>
						<span className='resumeLink'>Writeup</span>
					</div>
					<div className='sectionContentProse'>
						A visual presentation of novel algorithm optimizations for drawing square spirals
					</div>
				</div>
			</div>
			<hr />

			<Skills/>
			<hr />

			<div className='resumeSection'>
				<h2 className='sectionTitle'>Experience</h2>
				<div className='sectionContent'>
					<div className='sectionContentTitle'>Program Manager</div>
					<div className='sectionContentSubtitle'>
						Wayne Metropolitan Community Action Agency – Hamtramck, MI
					</div>
					<div className='sectionContentTime'>September 2022 - Present</div>
					<ul className='sectionContentProse'>
						<li>
							Managed a nonprofit program teaching literacy to school-age children in a refugee
							community.
						</li>
						<li>
							Designed and implemented effective literacy programs that catered to the unique
							needs of the student population, facilitating growth for students with limited
							English proficiency or significant trauma.
						</li>
						<li>
							Recruited, led, and retained a team of educators, volunteers, and support staff in
							carrying out the literacy program and coordinating with stakeholders including
							families and schools.
						</li>
						<li>
							Navigated multiple complex grant compliance guidelines to ensure compliance and
							continued funding.
						</li>
						<li>
							Developed partnerships with community organizations and stakeholders to secure
							resources and funding.
						</li>
						<li>
							Automated labor-intensive data entry processes with Python to increase staff
							efficiency and reduce errors.
						</li>
					</ul>
				</div>
				<div className='sectionContent'>
					<div className='sectionContentTitle'>Student Teacher</div>
					<div className='sectionContentSubtitle'>Wayne Memorial High School – Wayne, MI</div>
					<div className='sectionContentTime'>September 2021 - June 2022</div>
					<ul className='sectionContentProse'>
						<li>
							Increased all benchmark scores compared to previous years by developing and
							implementing effective curriculum and building positive relationships with
							students.
						</li>
						<li>
							Prepared unit and lesson plans for three separate courses, ensuring alignment with
							state standards.
						</li>
						<li>
							Navigated administrative requirements and university studies, demonstrating strong
							organizational and time-management skills.
						</li>
						<li>
							Collaborated with school social workers in IEP meetings to address barriers and
							support student success.
						</li>
					</ul>
				</div>
				<div className='sectionContent'>
					<div className='sectionContentTitle'>Community Organizer</div>
					<div className='sectionContentSubtitle'>MSPN – Ypsilanti, MI</div>
					<div className='sectionContentTime'>November 2019 - August 2021</div>
					<ul className='sectionContentProse'>
						<li>
							Led successful community organizing efforts, bringing together local stakeholders
							and community leaders to prevent evictions and increase civic engagement.
						</li>
						<li>
							Developed and implemented public service programs in collaboration with the local
							community, resulting in increased access to essential resources and services.
						</li>
						<li>
							Conducted survey research to identify community needs and preferences, informing
							targeted outreach and advocacy efforts.
						</li>
						<li>
							Received extensive training in community organizing and diversity, equity, and
							inclusion (DEI), honing skills in relationship-building, communication, and
							strategy development.
						</li>
					</ul>
				</div>
			</div>
			<hr />

			<div className='resumeSection'>
				<h2 className='sectionTitle'>Education</h2>
				<div className='sectionContent'>
					<div className='sectionContentTitle'>University of Michigan – Ann Arbor, School of Education</div>
					<div className='sectionContentSubtitle'>
					Master of Arts in Education

					</div>
					<div className='sectionContentTime'>
						July 2022
					</div>
					<div className='sectionContentProse'>
						Concentration in Educational technology and distance learning. University Honors Distinction.
					</div>
				</div>
				<div className='sectionContent'>
					<div className='sectionContentTitle'>University of Michigan – Ann Arbor, School of Literature, Science, and the Arts</div>
					<div className='sectionContentSubtitle'>
					Bachelor of Arts in History

					</div>
					<div className='sectionContentTime'>
						May 2021
					</div>
					<div className='sectionContentProse'>
						Concentration in economics and post-war US history. James B. Angell Scholar Distinction, University Honors Distinction. Attended on the full-tuition Jean Fairfax Scholarship.
					</div>
				</div>
			</div>
			<hr />


		</div>
	);
}

export default HireMe;
