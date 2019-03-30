import React from "react";
import { routes } from "../../config/";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
							classNames="fade"
							timeout={1000}
						>
							<Switch location={location}>
								{routes.map(({ id, ...props }) => (
									<Route key={id} {...props} />
								))}
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
			<div className="router__nav">
				<Nav />
			</div>
		</BrowserRouter>
	</div>
);

export default Router;
