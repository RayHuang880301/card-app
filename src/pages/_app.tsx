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

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {/* <Layout/> */}
        <Header />
        {<Component {...pageProps} />}
        {/* </Layout> */}
        <Footer />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
