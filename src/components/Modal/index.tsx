import React, { useState } from "react";
import Image from "next/legacy/image";
import ChooseWallet from "./Content/ChooseWallet";
// @styled components
import {
	ArrowButton,
	BannerContent,
	ModalWrapper,
	DescLabel,
	DescWrapper,
	HeadLabel,
	LogoLabel,
	LogoWrapper,
	MainContent,
	ModalContent,
} from "./modal.styles";
// assets
import LogoImg from "assets/images/logo.png";
import ArrowImg from "assets/images/arrow.png";
import ScanWallet from "./Content/ScanWallet";

const WalletModal: React.FC = () => {
	const [contentIdx, setContentIdx] = useState<number>(1);

	return (
		<ModalWrapper>
			<ModalContent>
				<BannerContent>
					<LogoWrapper>
						<Image src={LogoImg} alt="logo" width={30} height={30} />
						<LogoLabel>SHIBART</LogoLabel>
					</LogoWrapper>

					<DescWrapper>
						<div>
							<HeadLabel>
								Connect <br />
								wallet
							</HeadLabel>
							<ArrowButton>
								<Image src={ArrowImg} alt="arrow" width={40} height={12} />
							</ArrowButton>
						</div>
						<DescLabel>
							Choose how you want to connect. There are several wallet
							providers.
						</DescLabel>
					</DescWrapper>
				</BannerContent>
				<MainContent>
					{contentIdx === 1 && <ChooseWallet setContentIdx={setContentIdx} />}
					{contentIdx === 2 && <ScanWallet setContentIdx={setContentIdx} />}
				</MainContent>
			</ModalContent>
		</ModalWrapper>
	);
};

export default WalletModal;
