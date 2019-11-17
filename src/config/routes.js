import { Home } from "../routes";

export default [
	{
		id: "home",
		path: "/",
		component: Home,
		exact: true,
		linkText: "home"
	},
	{
		id: "live",
		path: "/live",
		component: Home,
		exact: true,
		linkText: "live"
	},
	{
		id: "contact",
		path: "/contact",
		component: Home,
		exact: true,
		linkText: "contact"
	}
];
