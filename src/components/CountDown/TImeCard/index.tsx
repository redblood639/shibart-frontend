import React from "react";
// @styled components
import { CardWrapper, BigLabel, SmallLabel } from "./timecard.styles";
// @types
import { TTimeCard } from "types/time";

const TimeCard: React.FC<TTimeCard> = ({ ...props }) => {
	return (
		<CardWrapper>
			<BigLabel>{props.time}</BigLabel>
			<SmallLabel>{props.desc}</SmallLabel>
		</CardWrapper>
	);
};

export default TimeCard;
