import React from "react";
import YouTube from "react-youtube";

const options = {
	height: 390,
	width: 640,
	allowFullScreen: true
};

const Embed = props => (
	<div className="embed">
		<YouTube
			containerClassName="embed__wrapper"
			options={options}
			{...props}
		/>
	</div>
);

export default Embed;
