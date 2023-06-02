import { TWallet } from "types/crypto";
import MetaMast from "assets/images/wallets/metamask.png";
import WalletConnect from "assets/images/wallets/walletconnect.png";
import CoinbaseWallet from "assets/images/wallets/coinbasewallet.png";

import { connectors } from "utility/connectors";

export const walletList: TWallet[] = [
	{
		icon: MetaMast,
		name: "MetaMask",
		type: connectors.Injected,
	},
	{
		icon: WalletConnect,
		name: "WalletConnect",
		type: connectors.WalletConnect,
	},
	{
		icon: CoinbaseWallet,
		name: "Coinbase wallet",
		type: connectors.CoinbaseWallet,
	},
];
