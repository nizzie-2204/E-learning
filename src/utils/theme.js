import { createTheme } from "@material-ui/core";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ffb607",
			light: "#f0aa00",
			contrastText: "#fff",
		},
		secondary: {
			main: "#007aaa",
			contrastText: "#000",
		},
	},
	typography: {
		fontFamily: "'Baloo Thambi 2', cursive",
	},
});

export default theme;
