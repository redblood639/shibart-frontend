import React, { useState } from "react";
import DotIcon from "assets/Icons/dot";
import MinusIcon from "assets/Icons/minus";
import PlusIcon from "assets/Icons/plus";
// @styled components
import { Label, RoadMapItems, RoadMapWrapper, Title } from "./roadmap.styles";
// @types
import { TRoadMap } from "types/roadmap";

interface PropsA {
	RoadIndex: number;
	setRoadIndex: Function;
}

type CombinedProps = TRoadMap & PropsA;

const RoadMapGroup: React.FC<CombinedProps> = ({
	title,
	labels,
	RoadIndex,
	id,
	setRoadIndex,
}) => {
	const [show, setShow] = useState<boolean>(true);

	const onClickItem = (flag: boolean, id: number) => {
		setShow(flag);
		setRoadIndex(id);
	};

	return (
		<RoadMapWrapper>
			<div>
				<Title>{title}</Title>
				{show ? (
					<div onClick={() => onClickItem(false, id)}>
						<MinusIcon />
					</div>
				) : (
					<div onClick={() => onClickItem(true, id)}>
						<PlusIcon />
					</div>
				)}
			</div>
			<RoadMapItems>
				{show
					? labels.map((label: string, index: number) => (
							<div key={title + index}>
								<div>
									<DotIcon />
								</div>
								<Label>{label}</Label>
							</div>
					  ))
					: ""}
			</RoadMapItems>
		</RoadMapWrapper>
	);
};

export default RoadMapGroup;
