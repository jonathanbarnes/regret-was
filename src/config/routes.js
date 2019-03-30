import Media from "../routes/Media";

export default [
	{
		id: "regret-was",
		path: "/",
		component: Media,
		exact: true,
		linkText: "regret was"
	},
	{
		id: "this-room-and-you",
		path: "/thisroomandyou",
		component: Media,
		exact: true,
		linkText: "this room & you"
	},
	{
		id: "contact",
		path: "/contact",
		component: Media,
		exact: true,
		linkText: "contact"
	},
	{
		id: "live",
		path: "/live",
		component: Media,
		exact: true,
		linkText: "live"
	}
];
