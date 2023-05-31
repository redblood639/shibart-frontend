import Footer from "layouts/Footer";
import Header from "layouts/Header";
import type { AppProps } from "next/app";
// import styled components
import GlobalStyle from "styles/globals";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
			<GlobalStyle />
		</>
	);
}
