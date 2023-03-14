import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const DarkTheme = {
	textColor: "whitesmoke",
	bgColor: "#111",
};

// const LightTheme = {
// 	textColor: "#111",
// 	backgroundColor: "whitesmoke",
// };

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<ThemeProvider theme={DarkTheme}>
		<App />
	</ThemeProvider>
);
