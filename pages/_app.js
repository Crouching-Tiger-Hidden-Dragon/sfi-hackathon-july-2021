import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'next-auth/client';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const { session } = pageProps;
  return (
    <Provider session={session}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
