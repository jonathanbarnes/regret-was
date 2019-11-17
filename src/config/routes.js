import { Home, Live } from "../routes";

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
		component: Live,
		exact: true,
		linkText: "live"
	}
];
