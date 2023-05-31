import React from "react";
// type
import { IconProps } from "types/Icon";

// -----------------------------------------------
const CloseIcon: React.FC<IconProps> = ({
	iColor = "#F7FBFA",
	iSize = { x: 32, y: 32 },
}) => {
	return (
		<svg
			width={iSize.x}
			height={iSize.y}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8 24L24 8"
				stroke={iColor}
				strokeWidth="3"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M24 24L8 8"
				stroke={iColor}
				strokeWidth="3"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
export default CloseIcon;
