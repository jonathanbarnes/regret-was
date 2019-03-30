import Media from "../routes/Media";

export default [
	{
		id: "media",
		path: "/media",
		component: Media,
		exact: true,
		linkText: "media"
	},
	{
		id: "contact",
		path: "/contact",
		component: Media,
		exact: true,
		linkText: "contact"
	}
];
