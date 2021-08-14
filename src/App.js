import "App.css";
import Header from "components/Homepage/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "utils/theme";
import Banner from "components/Homepage/Banner/Banner";
import Introduction from "components/Homepage/Introduction/Introduction";

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Router>
					<Header />
					<Banner />
					<Introduction />
					<Switch></Switch>
				</Router>
			</ThemeProvider>
		</div>
	);
}

export default App;
