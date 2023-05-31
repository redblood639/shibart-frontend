import React from "react";
import ConnectWallet from "components/Button/ConnectWallet";
import MenuArrow from "components/Icons/menuitem";
import CloseIcon from "components/Icons/multiply";
import Link from "next/link";
// @styled components
import {
	Label,
	MenuContent,
	MenuItem,
	MenuWrapper,
	SpeicalLabel,
} from "./mobilemenu.styles";
// @assets
import { MenuData } from "assets/data/menu";
// @type
import { TMobileMenu } from "types/mobilemenu";
import { TMenuItem } from "types/MenuItem";

const MobileMenu: React.FC<TMobileMenu> = ({ setMobileMenu }) => {
	const menuItems = MenuData.map((item: TMenuItem, index: number) => (
		<Link
			href={item.link}
			onClick={() => setMobileMenu(false)}
			key={`mobile-menu-${index}`}
		>
			<MenuItem>
				{item.special ? (
					<SpeicalLabel>{item.label}</SpeicalLabel>
				) : (
					<Label>{item.label}</Label>
				)}
				<MenuArrow />
			</MenuItem>
		</Link>
	));

	return (
		<MenuWrapper>
			<div onClick={() => setMobileMenu(false)}>
				<CloseIcon />
			</div>
			<MenuContent>{menuItems}</MenuContent>
			<ConnectWallet />
		</MenuWrapper>
	);
};

export default MobileMenu;
