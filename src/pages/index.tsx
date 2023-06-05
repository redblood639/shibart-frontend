import Head from "next/head";
import React from "react";
// @views
import {
	GenerateView,
	MainView,
	GalleryView,
	RoadMapView,
	AirDropView,
} from "views/home";

export default function Home() {
	return (
		<div>
			<Head>
				<title>ShibArt</title>
			</Head>
			<MainView />
			<GenerateView />
			<GalleryView />
			<RoadMapView />
			<AirDropView />
		</div>
	);
}
