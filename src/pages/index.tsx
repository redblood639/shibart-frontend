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
		<>
			<MainView />
			<GenerateView />
			<GalleryView />
			<RoadMapView />
			<AirDropView />
		</>
	);
}
