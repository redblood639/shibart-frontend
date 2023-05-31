import React from "react";
// type
import { IconProps } from "types/Icon";

// -----------------------------------------------
const MenuArrow: React.FC<IconProps> = ({
	iColor = "#555555",
	iSize = { x: 24, y: 24 },
}) => {
	return (
		<svg
			width={iSize.x}
			height={iSize.y}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3 12H21"
				stroke={iColor}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13 4L21 12L13 20"
				stroke={iColor}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
export default MenuArrow;
