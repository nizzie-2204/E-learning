import "App.css";
import Header from "components/Homepage/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "utils/theme";

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Router>
					<Header />
					<Switch></Switch>
				</Router>
			</ThemeProvider>
		</div>
	);
}

export default App;
