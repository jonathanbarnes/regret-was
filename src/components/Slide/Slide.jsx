import React from "react";

const Slide = ({ title }) => (
	<div className="swiper-slide slide">
		<div className="slide__content">
			<h1 className="slide__title">{title}</h1>
		</div>
	</div>
);

export default Slide;
