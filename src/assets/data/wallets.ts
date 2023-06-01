import { TWallet } from "types/crypto";
import MetaMast from "assets/images/wallets/metamask.png";
import WalletConnect from "assets/images/wallets/walletconnect.png";
import CoinbaseWallet from "assets/images/wallets/coinbasewallet.png";
import MyEtherWallet from "assets/images/wallets/mewwallet.png";

export const walletList: TWallet[] = [
	{
		icon: MetaMast,
		name: "MetaMask",
	},
	{
		icon: WalletConnect,
		name: "WalletConnect",
	},
	{
		icon: CoinbaseWallet,
		name: "Coinbase wallet",
	},
	{
		icon: MyEtherWallet,
		name: "MyEtherWallet",
	},
];
