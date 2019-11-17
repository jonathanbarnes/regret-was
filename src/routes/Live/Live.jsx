import React from "react";
import Page from "../../components/Page";
import shows from "../../config/shows";

const Live = props => (
	<Page className="live">
		{shows && shows.length > 0 ? (
			<ol className="live__list">
				{shows.map(show => (
					<li className="live__list-item">
						<p className="live__date">{show.date},</p>
						<h2 className="live__city">{show.city}</h2>
						<h3 className="live__venue">@ {show.venue}</h3>
						<a
							className="live__link"
							href={show.link}
							target="_blank"
						>
							tickets / event
						</a>
					</li>
				))}
			</ol>
		) : (
			<h1>no upcoming shows.</h1>
		)}
	</Page>
);

export default Live;
