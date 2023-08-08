/** @format */

import { useState, createContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "./pages/styles/theme";
import NavButton from "./components/NavButton";
import NavBar from "./components/NavBar";
import { useLocation, HashRouter as Router } from "react-router-dom";
import { MainRoutes } from "./Routes";
import { motion } from "framer-motion";
import "./App.css";
import type {
	PageContextType,
	Technology,
	SanityContextProps,
	PostPreview,
	Project,
	Resume,
} from "./types";
import { sanityClient } from "./client";

export const PageContext = createContext<PageContextType>("");
export const SanityContext = createContext<SanityContextProps | undefined>(undefined);

function App() {
	const [theme, setTheme] = useState(lightTheme);

	const toggleTheme = () => {
		setTheme(theme === lightTheme ? darkTheme : lightTheme);
	};

	const [posts, setPosts] = useState<PostPreview[]>([]);
	const [projects, setProjects] = useState<Project[]>([] as Project[]);
	const [resume, setResume] = useState<Resume>({} as Resume);

	const fetchData = async () => {
		try {
			console.log("fetching");
	

	

			const projectData = await sanityClient.fetch('*[_type == "project"]');
			setProjects(projectData);

			const resumeData = await sanityClient.fetch('*[_type == "resume"]{...}');

			// The resume only has references to projects, so we replace them with the real thing
			resumeData[0].projects = resumeData[0].projectRefs.map((ref: {_ref: string}) => {
				return projectData.find((project: Project) => project._id === ref._ref);
			});

			setResume(resumeData[0]);

			const postData = await sanityClient.fetch('*[_type == "post"]{ title, publishedAt, slug }');
			setPosts(postData);
			
	
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);


	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<SanityContext.Provider value={{ posts, projects, resume, fetchData }}>
					<div className='App'>
						<Router>
							<NavBar toggleTheme={toggleTheme} />

							<MainRoutes />
						</Router>
					</div>
			</SanityContext.Provider>
		</ThemeProvider>
	);
}

export default App;
