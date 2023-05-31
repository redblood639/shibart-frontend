import React from "react";
// @views
import { GenerateView, MainView, GalleryView } from "views/home";

export default function Home() {
	return (
		<>
			<MainView />
			<GenerateView />
			<GalleryView />
		</>
	);
}
