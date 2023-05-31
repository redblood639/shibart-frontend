import React from "react";
import TimeCard from "./TImeCard";
// @styled components
import { CountDownWrapper } from "./countdown.styles";
// @assets
import { TimeData } from "assets/data/time";
// @types
import { TTimeCard } from "types/time";

const CountDown: React.FC = () => {
	return (
		<CountDownWrapper>
			{TimeData.map((item: TTimeCard, index: number) => (
				<TimeCard {...item} key={`count-down-${index}`} />
			))}
		</CountDownWrapper>
	);
};

export default CountDown;
