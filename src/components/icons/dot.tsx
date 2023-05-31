import React from "react";
// type
import { IconProps } from "types/Icon";

// -----------------------------------------------
const DotIcon: React.FC<IconProps> = ({
	iColor = "#F29B4C",
	iSize = { x: 24, y: 24 },
}) => {
	return (
		<svg
			width={iSize.x}
			height={iSize.y}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="12" cy="12" r="11" stroke={iColor} stroke-width="2" />
			<circle cx="12" cy="12" r="1" stroke={iColor} stroke-width="2" />
		</svg>
	);
};
export default DotIcon;
