import React from "react";
import { routes } from "../../config/";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "../Nav";

const Router = () => (
	<BrowserRouter>
		<Nav />
		<div className="route">
			{routes.map(({ id, ...props }) => (
				<Route key={id} {...props} />
			))}
		</div>
	</BrowserRouter>
);

export default Router;
