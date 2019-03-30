import React from "react";
import Swiper from "react-id-swiper";
import Slide from "../Slide";
import { slider as params, slides } from "../../config";

const Slider = () => {
	return (
		<Swiper {...params}>
			{slides.map(slide => (
				<Slide key={slide.id} {...slide} />
			))}
		</Swiper>
	);
};

export default Slider;
