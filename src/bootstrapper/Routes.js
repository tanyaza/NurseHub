import About from "../scenes/About";
import Home from "../scenes/app/Home";
import SubmitOrder from "../scenes/app/SubmitOrder";
import Dashboard from "../scenes/admin/Dashboard";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppRoute from "./AppRoute";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Register from "../scenes/Register";
import Products from "../scenes/Products";

function Routes() {
	return (
		<Router>
			<Switch>
				<AppRoute path="/" exact component={Home} layout={MainLayout} />
				<AppRoute path="/about" component={About} layout={MainLayout} />
				<AppRoute path="/products" component={Products} layout={MainLayout} />
				<AppRoute
					path="/submitOrder"
					component={SubmitOrder}
					layout={MainLayout}
				/>
				<AppRoute
					path="/register"
					component={Register}
					layout={DashboardLayout}
				/>
				<AppRoute
					path="/admin/dashboard"
					exact
					component={Dashboard}
					layout={DashboardLayout}
				/>
			</Switch>
		</Router>
	);
}

export default Routes;
