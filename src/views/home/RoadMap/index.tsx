import React, { useState } from "react";
import Image from "next/legacy/image";
import RoadMapGroup from "components/RoadMap";
import NextArrowIcon from "components/Icons/next-arrow";
// @styled components
import {
	ArrowButton,
	Content,
	Label,
	RoadMapWrapper,
	ImageWrapper,
} from "./roadmap.styles";
// @types
import { RoadMapData } from "assets/data/roadmap";

const RoadMapView: React.FC = () => {
	const [RoadIndex, setRoadIndex] = useState<number>(1);

	return (
		<RoadMapWrapper>
			<ImageWrapper>
				<Content>
					<Label>Roadmap</Label>
					<ArrowButton>
						<NextArrowIcon />
					</ArrowButton>
				</Content>
			</ImageWrapper>
			<div>
				{RoadMapData.map((item: any, index: number) => (
					<RoadMapGroup
						key={`roadmap-group-${index}`}
						{...item}
						RoadIndex={RoadIndex}
						setRoadIndex={setRoadIndex}
					/>
				))}
			</div>
		</RoadMapWrapper>
	);
};

export default RoadMapView;
