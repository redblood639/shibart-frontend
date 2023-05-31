import React from "react";
import RoadMapGroup from "components/RoadMap";
import NextArrowIcon from "components/Icons/next-arrow";
// @styled components
import {
	ArrowButton,
	Content,
	Label,
	RoadMapWrapper,
	ShibImage,
} from "./roadmap.styles";
// @assets
import RoadMapImg from "assets/images/roadmap.png";
import { RoadMapData } from "assets/data/roadmap";

const RoadMapView: React.FC = () => {
	return (
		<RoadMapWrapper>
			<div>
				<Content>
					<Label>Roadmap</Label>
					<ArrowButton>
						<NextArrowIcon />
					</ArrowButton>
				</Content>
				<ShibImage src={RoadMapImg.src} />
			</div>
			<div>
				{RoadMapData.map((item: any, index: number) => (
					<RoadMapGroup key={`roadmap-group-${index}`} {...item} />
				))}
			</div>
		</RoadMapWrapper>
	);
};

export default RoadMapView;
