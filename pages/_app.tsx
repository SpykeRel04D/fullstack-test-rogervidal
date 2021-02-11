import type { AppProps} from 'next/app';
import { ApolloProvider } from '@apollo/client';

import client from '../services/apollo-client';
import GlobalStyle from '../ui/globals';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
