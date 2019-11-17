import React from "react";
import Page from "../../components/Page";
import * as blur from "../../media/blur-rip-off";

const Home = props => (
	<Page className="home">
		<h1>MY ONLY REGRET WAS</h1>
		<h2>my only regret was</h2>
		<img src={blur.tom} />
		<img src={blur.sam} />
		<img src={blur.olly} />
		<img src={blur.jon} />
	</Page>
);

export default Home;
