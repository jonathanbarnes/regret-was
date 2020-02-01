import React from "react";
import { NavLink } from "react-router-dom";
import { routes, externalLinks } from "../../config/";

const Nav = () => {
	return (
		<div className="nav">
			{routes.map(({ id, path, linkText }) => (
				<NavLink
					key={id}
					to={path}
					className="nav__link"
					activeClassName="nav__link--active"
					exact
					strict
				>
					{linkText}
				</NavLink>
			))}
			{externalLinks.map(({ href, text }) => (
				<a
					className="nav__link nav__link--external"
					href={href}
					target="_blank"
					rel="noopener noreferrer"
				>
					{text}
				</a>
			))}
		</div>
	);
};

export default Nav;
