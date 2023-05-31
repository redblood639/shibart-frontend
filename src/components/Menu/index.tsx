import React from "react";
import MenuItem from "./MenuItem";
// @styled components
import { MenuWrapper } from "./menu.styles";
// @assets
import { MenuData } from "assets/data/menu";
// @types
import { TMenuItem } from "types/Menu/MenuItem";

const Menu: React.FC = () => {
	return (
		<MenuWrapper>
			{MenuData.map((item: TMenuItem, index: number) => (
				<MenuItem key={`header-menu-${index}`} {...item} />
			))}
		</MenuWrapper>
	);
};

export default Menu;
