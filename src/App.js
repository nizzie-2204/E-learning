import "App.css";
import Header from "components/Homepage/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "utils/theme";
import Banner from "components/Homepage/Banner/Banner";
import Introduction from "components/Homepage/Introduction/Introduction";
import About from "components/Homepage/About/About";
import Testimonial from "components/Homepage/Testimonial/Testimonial";
import Activity from "components/Homepage/Activity/Activity";

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Router>
					<Header />
					<Banner />
					<Introduction />
					<About />
					<Testimonial />
					<Activity />
					<Switch></Switch>
				</Router>
			</ThemeProvider>
		</div>
	);
}

export default App;
