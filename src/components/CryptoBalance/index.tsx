import React from "react";
// @styled components
import { BalanceWrappe, Label, Title } from "./cryptobalance.styles";

const CryptoBalance: React.FC = () => {
	return (
		<BalanceWrappe>
			<div>
				<Title>USDT Balance</Title>
				<Label>0</Label>
			</div>
			<div>
				<Title>Current Price</Title>
				<Label>$0.0000296</Label>
			</div>
			<div>
				<Title>Next Price</Title>
				<Label>$0.0000320</Label>
			</div>
			<div>
				<Title>Your Points</Title>
				<Label>0</Label>
			</div>
		</BalanceWrappe>
	);
};

export default CryptoBalance;
