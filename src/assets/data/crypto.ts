import { TCrypto } from "types/crypto";
import BNB1 from "assets/images/cryptos/bnb1.png";
import BNB2 from "assets/images/cryptos/bnb2.png";

import BTC1 from "assets/images/cryptos/btc1.png";
import BTC2 from "assets/images/cryptos/btc2.png";

import BUSD1 from "assets/images/cryptos/busd1.png";
import BUSD2 from "assets/images/cryptos/busd2.png";

import ETH1 from "assets/images/cryptos/eth1.png";
import ETH2 from "assets/images/cryptos/eth2.png";

import USDC1 from "assets/images/cryptos/usdc1.png";
import USDC2 from "assets/images/cryptos/usdc2.png";

import USDT1 from "assets/images/cryptos/usdt1.png";
import USDT2 from "assets/images/cryptos/usdt2.png";

export const CryptoCurrenys: TCrypto[] = [
	{
		icon1: ETH1,
		icon2: ETH2,
		symbol: "ETH",
		network: "",
	},
	{
		icon1: ETH1,
		icon2: ETH2,
		symbol: "WETH",
		network: "ERC20",
	},
	{
		icon1: BTC1,
		icon2: BTC2,
		symbol: "WBTC",
		network: "ERC20",
	},
	{
		icon1: USDC1,
		icon2: USDC2,
		symbol: "USDC",
		network: "ERC20",
	},
	{
		icon1: USDT1,
		icon2: USDT2,
		symbol: "USDT",
		network: "ERC20",
	},
	{
		icon1: BNB1,
		icon2: BNB2,
		symbol: "BNB",
		network: "",
	},
	{
		icon1: USDT1,
		icon2: USDT2,
		symbol: "USDT",
		network: "BEP20",
	},
	{
		icon1: BUSD1,
		icon2: BUSD1,
		symbol: "BUSD",
		network: "BEP20",
	},
];
