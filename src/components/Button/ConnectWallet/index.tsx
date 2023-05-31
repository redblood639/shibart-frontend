import React from "react";
import { useAppContext } from "context/state";
// @styled components
import { ButtonWrapper, Label } from "./connectwallet.styles";

export const ConnectWallet: React.FC<{ type?: string }> = ({
	type = "parimary",
}) => {
	const { walletModalContext, scanModalContext, signInModalContext } =
		useAppContext();
	const [showModal, setShowModal] = walletModalContext;
	return (
		<ButtonWrapper
			type={type}
			onClick={() => {
				setShowModal(true);
			}}
		>
			<Label>CONNECT WALLET</Label>
		</ButtonWrapper>
	);
};

export default ConnectWallet;
