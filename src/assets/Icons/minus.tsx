import React from "react";
// type
import { IconProps } from "types/Icon";

// -----------------------------------------------
const MinusIcon: React.FC<IconProps> = ({
	iColor = "#686A6C",
	iSize = { x: 32, y: 32 },
}) => {
	return (
		<svg
			width={iSize.x}
			height={iSize.y}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="16"
				cy="16"
				r="12"
				stroke={iColor}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.6665 16H21.3332"
				stroke={iColor}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
export default MinusIcon;
