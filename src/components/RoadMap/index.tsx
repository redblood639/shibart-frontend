import React, { useState } from "react";
// @styled components
import { Label, RoadMapItems, RoadMapWrapper, Title } from "./roadmap.styles";
// @types
import { TRoadMap } from "types/roadmap";
import DotIcon from "components/Icons/dot";
import MinusIcon from "components/Icons/minus";
import PlusIcon from "components/Icons/plus";

const RoadMapGroup: React.FC<TRoadMap> = ({ title, labels }) => {
	const [show, setShow] = useState<boolean>(true);

	return (
		<RoadMapWrapper>
			<div>
				<Title>{title}</Title>
				{show ? (
					<div onClick={() => setShow(false)}>
						<MinusIcon />
					</div>
				) : (
					<div onClick={() => setShow(true)}>
						<PlusIcon />
					</div>
				)}
			</div>
			<RoadMapItems>
				{show
					? labels.map((label: string, index: number) => (
							<div key={title + index}>
								<DotIcon />
								<Label>{label}</Label>
							</div>
					  ))
					: ""}
			</RoadMapItems>
		</RoadMapWrapper>
	);
};

export default RoadMapGroup;
