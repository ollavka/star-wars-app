import { ReactNode, FC } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const BASE_URL = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

type Props = {
  children: ReactNode
}

const Provider: FC<Props> = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export { Provider, client };
