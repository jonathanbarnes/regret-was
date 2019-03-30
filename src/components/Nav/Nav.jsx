import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../config/";

const Nav = () => {
	return (
		<div className="nav">
			{routes.map(({ id, path, linkText }) => (
				<NavLink
					key={id}
					to={path}
					className="nav__link"
					activeClassName="nav__link--active"
				>
					{linkText}
				</NavLink>
			))}
		</div>
	);
};

export default Nav;
