import React from "react";
// @styled components
import {
	CryptoItemWrapper,
	CryptoItem,
	SymbolLabel,
	NetworkLabel,
} from "./crypto.styles";
// @assets
import { CryptoCurrenys } from "assets/data/crypto";
// @types
import { TCrypto } from "types/crypto";
import Image from "next/legacy/image";

const CryptoListContent: React.FC = () => {
	return (
		<CryptoItemWrapper>
			{CryptoCurrenys.map((item: TCrypto, index: number) => (
				<CryptoItem key={`crypto-currency-${index}`}>
					<div>
						<Image
							src={item.icon1}
							alt={item.symbol + item.network}
							width={30}
							height={30}
						/>
					</div>
					<div>
						<SymbolLabel>{item.symbol}</SymbolLabel>
						<NetworkLabel>{item.network}</NetworkLabel>
					</div>
				</CryptoItem>
			))}
		</CryptoItemWrapper>
	);
};

export default CryptoListContent;
