import Footer from "layouts/Footer";
import Header from "layouts/Header";
import type { AppProps } from "next/app";
import { AppWrapper } from "context/state";
// web3
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
// import styled components
import GlobalStyle from "styles/globals";

const getLibrary = (provider, connector) => {
	const library = new Web3Provider(provider);
	library.pollingInterval = 12000;
	return library;
};

export default function App({ Component, pageProps }: AppProps) {
	return (
		// <Web3ReactProvider getLibrary={getLibrary}>
		<AppWrapper>
			<Header />
			<Component {...pageProps} />
			<Footer />
			<GlobalStyle />
		</AppWrapper>
		// </Web3ReactProvider>
	);
}
