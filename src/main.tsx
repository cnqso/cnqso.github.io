/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme } from "./pages/styles/theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
