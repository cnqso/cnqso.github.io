/** @format */

import { useState, createContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "./assets/theme";
import NavButton from "./components/NavButton";
import NavBar from "./components/NavBar";
import { useLocation, HashRouter as Router } from "react-router-dom";
import { MainRoutes } from "./Routes";
import { motion } from "framer-motion";
import "./App.css";
import type { PageContextType, Technologies, SanityContextProps, PostPreview, Project, Resume } from "./types";
import {sanityClient} from "./client";

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
		console.log("fetching");
		sanityClient
			.fetch(
				`*[_type == "post"]{
					title, publishedAt, slug}`
			)
			.then((data) => setPosts(data))
			.catch(console.error);
		sanityClient
			.fetch(
				`*[_type == "project"]`
			)
			.then((data) => setProjects(data))
			.catch(console.error);

	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<SanityContext.Provider value={{ posts, projects, resume, fetchData }}>
				<div className='fullWidth'>
					<div className='App'>
						<Router>
							<NavBar toggleTheme={toggleTheme} />

							<MainRoutes />
						</Router>
					</div>
				</div>
			</SanityContext.Provider>
		</ThemeProvider>
	);
}

export default App;
