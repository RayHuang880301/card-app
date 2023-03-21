import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@/components/Layout/Layout';
import theme from '@/config/chakra';
import '@rainbow-me/rainbowkit/styles.css';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { APP_ALCHEMY_ID } from '@/config/web3';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

const queryClient = new QueryClient();

const { chains, provider } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: APP_ALCHEMY_ID }), publicProvider()]
);

const wagmiClient = createClient({
  autoConnect: false,
  provider,
});

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout: (page: ReactElement) => ReactNode =
    Component?.getLayout ?? Layout;
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
        </QueryClientProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}
