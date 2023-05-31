import React from "react";
// type
import { IconProps } from "types/Icon";

// -----------------------------------------------
const PlusIcon: React.FC<IconProps> = ({
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
				d="M10.6667 16H21.3334"
				stroke={iColor}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16 21.3333L16 10.6666"
				stroke={iColor}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
export default PlusIcon;
