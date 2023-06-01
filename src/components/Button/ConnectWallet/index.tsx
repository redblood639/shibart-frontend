import React from "react";
import { useAppContext } from "context/state";
import WalletModal from "components/Modal";
// @styled components
import { ButtonWrapper, Label } from "./connectwallet.styles";

export const ConnectWallet: React.FC<{ type?: string }> = ({
	type = "parimary",
}) => {
	const { walletModalContext } = useAppContext();
	const [showModal, setShowModal] = walletModalContext;
	return (
		<>
			<ButtonWrapper
				type={type}
				onClick={() => {
					setShowModal(true);
				}}
			>
				<Label>CONNECT WALLET</Label>
			</ButtonWrapper>
			{showModal ? <WalletModal /> : null}
		</>
	);
};

export default ConnectWallet;
