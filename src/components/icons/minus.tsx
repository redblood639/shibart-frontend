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
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M10.6665 16H21.3332"
				stroke={iColor}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
export default MinusIcon;
