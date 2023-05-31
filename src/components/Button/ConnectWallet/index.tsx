import React from "react";
// @styled components
import { ButtonWrapper, Label } from "./connectwallet.styles";

export const ConnectWallet: React.FC<{ type?: string }> = ({
	type = "parimary",
}) => {
	return (
		<ButtonWrapper type={type}>
			<Label>CONNECT WALLET</Label>
		</ButtonWrapper>
	);
};

export default ConnectWallet;
