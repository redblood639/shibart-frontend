import React, { useState } from "react";
import Logo from "components/Logo";
import Menu from "components/Menu";
import MenuIcon from "assets/Icons/menu";
import MobileMenu from "components/MobileMenu";
import ConnectWallet from "components/Button/ConnectWallet";
// styled componnets
import { DeskMenu_W, MobileMenu_W, HeaderWrapper } from "./header.styles";

const Header: React.FC = () => {
	const [mobilMenu, setMobileMenu] = useState<boolean>(false);

	return (
		<HeaderWrapper>
			<Logo pos="header" />
			<DeskMenu_W>
				<Menu />
				<ConnectWallet />
			</DeskMenu_W>

			<MobileMenu_W>
				<div onClick={() => setMobileMenu(true)}>
					<MenuIcon />
				</div>
				{mobilMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
			</MobileMenu_W>
		</HeaderWrapper>
	);
};

export default Header;
