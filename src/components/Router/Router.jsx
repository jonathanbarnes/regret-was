import React from "react";
import { routes } from "../../config/";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Nav from "../Nav";

const Router = () => (
	<div className="router">
		<BrowserRouter>
			<Route
				render={({ location }) => (
					<TransitionGroup className="router__wrapper">
						<CSSTransition
							key={location.key}
							classNames="router__route router__route-"
							timeout={1000}
							appear
						>
							<div>
								<Switch location={location}>
									{routes.map(({ id, ...props }) => (
										<Route key={id} {...props} />
									))}
									<Redirect to="/"></Redirect>
								</Switch>
							</div>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
			<Nav />
		</BrowserRouter>
	</div>
);

export default Router;
