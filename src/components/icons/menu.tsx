import React from "react";
// type
import { IconProps } from "types/Icon";

// -----------------------------------------------
const MenuIcon: React.FC<IconProps> = ({
	iColor = "#3C2C2D",
	iSize = { x: 24, y: 12 },
}) => {
	return (
		<svg
			width={iSize.x}
			height={iSize.y}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="24" height="3" rx="1.5" fill={iColor} />
			<rect y="9" width="18" height="3" rx="1.5" fill={iColor} />
		</svg>
	);
};
export default MenuIcon;
