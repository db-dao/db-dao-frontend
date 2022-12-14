import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
// import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { GoogleAnalytics } from "nextjs-google-analytics";
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const { chains, provider, webSocketProvider } = configureChains(
    [
        // chain.mainnet,
        // chain.polygon,
        // chain.optimism,
        // chain.arbitrum,
        chain.arbitrumGoerli,
        // chain.goerli,
        // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
        // ? [chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
        // : []),
    ],
    [
        // alchemyProvider({
        //     // This is Alchemy's default API key.
        //     // You can get your own at https://dashboard.alchemyapi.io
        //     apiKey: process.env.ALCHEMY_KEY,
        // }),
        publicProvider(),
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'RainbowKit App',
    chains,
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
});

// const client = new ApolloClient({
//     uri: 'http://localhost:8000/graphql',
//     cache: new InMemoryCache(),
// });
  

function MyApp({ Component, pageProps }: AppProps) {
    return (
            <WagmiConfig client={wagmiClient}>
                <div className="container mx-auto w-[35rem] px-4">
                    <RainbowKitProvider chains={chains}>
                        <GoogleAnalytics trackPageViews />
                        {/* <ApolloProvider client={client}> */}
                            <Component {...pageProps} />
                        {/* </ApolloProvider> */}
                    </RainbowKitProvider>
                    <Footer />
                </div>
            </WagmiConfig>

    );
}

export default MyApp;