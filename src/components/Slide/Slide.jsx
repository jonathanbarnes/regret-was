import React from "react";

const Slide = ({ title, imageUrl }) => (
	<div className="swiper-slide slide">
		<div className="slide__content">
			<h1 className="slide__title">{title}</h1>
			<img className="slide__image" src={imageUrl} />
		</div>
	</div>
);

export default Slide;
