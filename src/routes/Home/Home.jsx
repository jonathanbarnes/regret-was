import React from "react";
import Page from "../../components/Page";
import Embed from "../../components/Embed";
import LazyLoad from "react-lazyload";

import * as blur from "../../media/blur-rip-off";
import velvet from "../../media/velvet.jpg";
import vase from "../../media/vase.jpg";
import promo1 from "../../media/promo1.jpg";
import red from "../../media/red.jpg";
import flower from "../../media/flower.svg";

const Image = props => (
	<LazyLoad once offset={100}>
		<img {...props} alt="" />
	</LazyLoad>
);

const Home = props => (
	<Page className="home">
		<Image src={promo1} />
		<Image src={blur.tom} />
		<Image src={blur.sam} />
		<Image src={blur.olly} />
		<Image src={blur.jon} />
		<Embed videoId="tHFBpdO9_Dw" />
		<Image src={red} />
		<Embed videoId="gQSVydDIgyc" />
		<Image src={vase} />
		<Embed videoId="loIVrJN3pYA" />
		<Image src={velvet} />
		<Image src={flower} />
	</Page>
);

export default Home;
