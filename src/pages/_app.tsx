import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Layout from '@/components/Layout/Layout';
import Header from '@/components/Header/Header';
import theme from '@/config/chakra';
import Footer from '@/components/Footer/Footer';
import '@rainbow-me/rainbowkit/styles.css';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { APP_ALCHEMY_ID } from '@/config/web3';

const queryClient = new QueryClient();

const { chains, provider } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: APP_ALCHEMY_ID }), publicProvider()]
);

const wagmiClient = createClient({
  autoConnect: false,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <QueryClientProvider client={queryClient}>
          {/* <Layout/> */}
          <Header />
          {<Component {...pageProps} />}
          {/* </Layout> */}
          <Footer />
        </QueryClientProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}
