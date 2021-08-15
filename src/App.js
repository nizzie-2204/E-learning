import "App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "utils/theme";
import Home from "pages/Home/Home";
import Teacher from "pages/Teacher/Teacher";
import Vision from "pages/Vision/Vision";
import StudyPrograms from "pages/StudyPrograms/StudyPrograms";
import Admission from "pages/Admission/Admission";
import Contact from "pages/Contact/Contact";

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/teacher" component={Teacher} />
						<Route exact path="/vision" component={Vision} />
						<Route exact path="/programs" component={StudyPrograms} />
						<Route exact path="/admission" component={Admission} />
						<Route exact path="/contact" component={Contact} />
					</Switch>
				</Router>
			</ThemeProvider>
		</div>
	);
}

export default App;
