import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

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
