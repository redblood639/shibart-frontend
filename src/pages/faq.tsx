import Head from "next/head";
import React from "react";
// @views
import FaqView from "views/faq";

export default function Home() {
	return (
		<>
			<Head>
				<title>ShibArt</title>
			</Head>
			<FaqView />
		</>
	);
}
