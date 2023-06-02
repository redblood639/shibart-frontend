import React, { useState } from "react";
import FaqGroup from "components/Faq";
import NextArrowIcon from "assets/Icons/next-arrow";
// @styled components
import {
	ArrowButton,
	Content,
	Label,
	FaqWrapper,
	ImageWrapper,
} from "./faq.styles";
// @types
import { FaqData } from "assets/data/faq";

const FaqView: React.FC = () => {
	const [RoadIndex, setRoadIndex] = useState<number>(1);

	return (
		<FaqWrapper>
			<ImageWrapper>
				<Content>
					<Label>FAQ</Label>
					<ArrowButton>
						<NextArrowIcon />
					</ArrowButton>
				</Content>
			</ImageWrapper>
			<div>
				{FaqData.map((item: any, index: number) => (
					<FaqGroup
						key={`roadmap-group-${index}`}
						{...item}
						RoadIndex={RoadIndex}
						setRoadIndex={setRoadIndex}
					/>
				))}
			</div>
		</FaqWrapper>
	);
};

export default FaqView;
