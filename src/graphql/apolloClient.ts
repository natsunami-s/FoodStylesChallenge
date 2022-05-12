import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';

const GRAPHQL_ENDPOINT = 'https://api-dev.foodstyles.com/graphql';

const apolloClient = token => {
  const link = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  return new ApolloClient({
    link: from([link]),
    cache: new InMemoryCache(),
  });
};

export default apolloClient;
