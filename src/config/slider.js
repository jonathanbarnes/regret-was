import { Navigation, Parallax } from "swiper/dist/js/swiper.esm";

export default {
	modules: [Navigation],
	containerClass: "slider swiper-container",
	speed: 1000,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	parallax: true,
	parallaxEl: {
		el: ".slider__background",
		value: "-10%"
	}
};
