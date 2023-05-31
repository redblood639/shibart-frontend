import React from "react";
// type
import { IconProps } from "types/Icon";

// -----------------------------------------------
const NextArrowIcon: React.FC<IconProps> = ({
	iColor = "#202025",
	iSize = { x: 81, y: 23 },
}) => {
	return (
		<svg
			width={iSize.x}
			height={iSize.y}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="0.555664"
				y="8.94373"
				width="78.2222"
				height="4.88889"
				rx="2.44444"
				fill={iColor}
			/>
			<path
				d="M69.6113 2.83264L78.4724 11.6938L69.6113 20.5549"
				stroke={iColor}
				stroke-width="4.88889"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
export default NextArrowIcon;