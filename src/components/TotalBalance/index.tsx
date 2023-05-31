import React from "react";
// @styled components
import { Label, TotalBalanceWrapper, UsedBalance } from "./totalbalance.styles";

const TotalBalance: React.FC = () => {
	return (
		<TotalBalanceWrapper>
			<UsedBalance />
			<Label>raised so far: $5,900,241.93</Label>
		</TotalBalanceWrapper>
	);
};

export default TotalBalance;
