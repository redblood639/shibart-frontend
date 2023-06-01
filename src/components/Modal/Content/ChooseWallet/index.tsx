import React from "react";
import Image from "next/legacy/image";
// @styled components
import {
	ChooseWalletWrapper,
	HeadLabel,
	Label,
	ItemWrapper,
	ScanButton,
	WalletItems,
	NoWallet,
	CloseButton,
} from "./choosewallet.styles";
// @types
import { TWallet } from "types/crypto";
// @assets
import CloseImg from "assets/images/close.png";
import ScanImg from "assets/images/placeholder.png";
import { walletList } from "assets/data/wallets";
import { useAppContext } from "context/state";

const WalletItem: React.FC<TWallet> = (props) => {
	return (
		<ItemWrapper>
			<Image src={props.icon} alt={props.name} width={20} height={20} />
			<Label>{props.name}</Label>
		</ItemWrapper>
	);
};

const ChooseWallet: React.FC<{ setContentIdx: Function }> = ({
	setContentIdx,
}) => {
	const { walletModalContext } = useAppContext();
	const [showModal, setShowModal] = walletModalContext;
	return (
		<ChooseWalletWrapper>
			<CloseButton onClick={() => setShowModal(false)}>
				<Image src={CloseImg} alt="close" width={30} height={30} />
			</CloseButton>
			<HeadLabel>Choose the Wallet</HeadLabel>
			<WalletItems>
				{walletList.map((item: TWallet, index: number) => (
					<WalletItem key={`wallet-item-${index}`} {...item} />
				))}
			</WalletItems>
			<ScanButton onClick={() => setContentIdx(2)}>
				<Image src={ScanImg} alt="scan-wallet" width={20} height={20} />
				<Label>Scan to connect</Label>
			</ScanButton>
			<NoWallet>
				<Label>{"I don't have a wallet"}</Label>
			</NoWallet>
		</ChooseWalletWrapper>
	);
};

export default ChooseWallet;
