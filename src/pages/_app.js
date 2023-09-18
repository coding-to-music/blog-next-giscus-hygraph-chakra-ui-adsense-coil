import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';

import { client } from '@/utils/index.js';
import theme from '../theme';
import '../styles/globals.css';
import Fonts from '../theme/Fonts';
import { Analytics } from '@vercel/analytics/react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
        <Analytics />
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default MyApp;
