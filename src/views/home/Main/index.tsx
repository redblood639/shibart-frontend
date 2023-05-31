import React from "react";
import Image from "next/legacy/image";
import CryptoListContent from "components/CryptoItem";
import CryptoBalance from "components/CryptoBalance";
import CountDown from "components/CountDown";
import TotalBalance from "components/TotalBalance";
import SwapCrypto from "components/SwapCrypto";
// @styled components
import { MainWrapper } from "./main.styles";
// @assets
import Artwork from "assets/images/artwork.png";
import ConnectWallet from "components/Button/ConnectWallet";

const MainView: React.FC = () => {
	return (
		<MainWrapper>
			<div>
				<Image src={Artwork} alt="shibart" />
			</div>
			<div>
				<CryptoListContent />
				<CryptoBalance />
				<CountDown />
				<TotalBalance />
				<SwapCrypto />
				<ConnectWallet type="second" />
			</div>
		</MainWrapper>
	);
};

export default MainView;
