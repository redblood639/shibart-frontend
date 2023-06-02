import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const CoinbaseWallet = new WalletLinkConnector({
	url: `https://mainnet.infura.io/v3/${process.env.PUBLIC_NEXT_INFURA_KEY}`,
	appName: "Web3-react Demo",
	supportedChainIds: [1, 3, 4, 5, 42],
});

const WalletConnect = new WalletConnectConnector({
	rpc: `https://mainnet.infura.io/v3/${process.env.PUBLIC_NEXT_INFURA_KEY}`,
	bridge: "https://bridge.walletconnect.org",
	qrcode: true,
});

const Injected = new InjectedConnector({
	supportedChainIds: [1, 3, 4, 5, 42],
});

export const connectors = {
	Injected: Injected,
	WalletConnect: WalletConnect,
	CoinbaseWallet: CoinbaseWallet,
};
