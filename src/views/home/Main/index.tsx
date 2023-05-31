import React from "react";
import Image from "next/legacy/image";
// @styled components
import { MainWrapper } from "./main.styles";
// @assets
import Artwork from "assets/images/artwork.png";

const MainView: React.FC = () => {
	return (
		<MainWrapper>
			<div>
				<Image src={Artwork} alt="shibart" />
			</div>
			<div></div>
		</MainWrapper>
	);
};

export default MainView;
