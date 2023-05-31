import React from "react";
// @styled component
import { MenuItemWrapper, Label } from "./menuitem.styles";
// @types
import { TMenuItem } from "types/MenuItem";
import Link from "next/link";

const MenuItem: React.FC<TMenuItem> = ({ label, link }) => {
	return (
		<MenuItemWrapper>
			<Link href={link}>
				<Label>{label}</Label>
			</Link>
		</MenuItemWrapper>
	);
};

export default MenuItem;
