import React from "react";
// type
import { IconProps } from "types/Icon";

// -----------------------------------------------
const NextArrowIcon: React.FC<IconProps> = ({
	iColor = "#202025",
	iSize = { x: 132, y: 37 },
}) => {
	return (
		<svg
			width={iSize.x}
			height={iSize.y}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect y="14" width="128" height="8" rx="4" fill="#202025" />
			<path
				d="M113 4L127.5 18.5L113 33"
				stroke={iColor}
				stroke-width="8"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
export default NextArrowIcon;
