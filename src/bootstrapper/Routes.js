import Artists from "../scenes/Artists";
import About from "../scenes/About";
import Home from "../scenes/app/Home";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppRoute from "./AppRoute";
import MainLayout from "../layouts/MainLayout";
import Contacts from "../scenes/Contacts";

function Routes() {
	return (
		<Router>
			<Switch>
				<AppRoute path="/" exact component={Home} layout={MainLayout} />
				<AppRoute path="/artists/:id" component={Artists} layout={MainLayout} />
				<AppRoute path="/contacts" component={Contacts} layout={MainLayout} />
				<AppRoute path="/about" component={About} layout={MainLayout} />
			</Switch>
		</Router>
	);
}

export default Routes;
