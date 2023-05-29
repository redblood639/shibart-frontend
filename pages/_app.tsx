import { AppProps } from 'next/app';
// import { Inter } from 'next/font/google';
import { AppWrapper } from '../src/context/state'; // import based on where you put it

import "../src/styles/global.css";
// import { WagmiConfig } from 'wagmi'
// import { client } from '../src/Wagmi'

interface CustomPageProps {}

// const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
  return (
    // <WagmiConfig client={client}>
      <AppWrapper>
        <main
        //  className={inter.className}
        >
          <Component {...pageProps} />
        </main>
      </AppWrapper>
    // </WagmiConfig>
  )
}