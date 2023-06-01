import React from "react";
import Image from "next/legacy/image";
import {
	HeadLabel,
	Label,
	NoWallet,
	ScanImage,
	ScanWalletWrapper,
	BackButton,
} from "./scanwallet.styles";
import QRCode from "assets/images/QR_code.png";
import BackImg from "assets/images/back.png";

const ScanWallet: React.FC<{ setContentIdx: Function }> = ({
	setContentIdx,
}) => {
	return (
		<ScanWalletWrapper>
			<BackButton onClick={() => setContentIdx(1)}>
				<Image src={BackImg} alt="close" width={30} height={30} />
			</BackButton>
			<HeadLabel>Scan to connect</HeadLabel>
			<ScanImage>
				<Image src={QRCode} alt="QRcode" width={288} height={288} />
			</ScanImage>
			<Label>{"Don't you have a wallet app?"}</Label>
			<NoWallet>
				<Label>{"I don't have a wallet"}</Label>
			</NoWallet>
		</ScanWalletWrapper>
	);
};

export default ScanWallet;
