import React, { useState } from "react";
import Image from "next/legacy/image";
// styled components
import { FormInput, Label, SwapCryptoWrapper } from "./swapcrypto.styles";
// assets
import USDT from "assets/images/cryptos/usdc2.png";
import SHIB from "assets/images/cryptos/shib.png";

const SwapCrypto: React.FC = () => {
	const [crypto, setCrypto] = useState<number>(0);
	const [shibart, setShibart] = useState<number>(0);
	const cryptoValueChange = (e: React.ChangeEvent<any>, type: string) => {
		if (e.target.value == Number(e.target.value)) {
			if (type === "pay") {
				setCrypto(e.target.value);
			} else {
				setShibart(e.target.value);
			}
		}
	};
	return (
		<SwapCryptoWrapper>
			<div>
				<div>
					<Label>You pay</Label>
					<Label>MAX</Label>
				</div>
				<div>
					<FormInput
						value={crypto}
						onChange={(e) => {
							cryptoValueChange(e, "pay");
						}}
					/>
					<Image src={USDT} alt="pay-crypto" width={32} height={32} />
				</div>
			</div>
			<div>
				<div>
					<Label>Points you receive</Label>
				</div>
				<div>
					<FormInput
						value={shibart}
						onChange={(e) => {
							cryptoValueChange(e, "receive");
						}}
					/>
					<Image src={SHIB} alt="receive-crypto" width={32} height={32} />
				</div>
			</div>
		</SwapCryptoWrapper>
	);
};

export default SwapCrypto;
