import React from "react";
import Logo from "components/Logo";
import Menu from "components/Menu";
import ConnectWallet from "components/Button/ConnectWallet";
// styled componnets
import { HeaderWrapper } from "./header.styles";

const Header: React.FC = () => {
	return (
		<HeaderWrapper>
			<Logo pos="header" />
			<div>
				<Menu />
				<ConnectWallet />
			</div>
		</HeaderWrapper>
	);
};

export default Header;
