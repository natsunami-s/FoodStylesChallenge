import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';

const GRAPHQL_ENDPOINT = 'https://api-dev.foodstyles.com/graphql';

const apolloClient = (token) => {
  console.warn('r',token)
  const link = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    headers: {
      // access_token: token ? `Bearer ${token}` : '',
      authorization: token ? `Bearer ${token}` : "",
      
    },
  });

  return new ApolloClient({
    link: from([link]),
    cache: new InMemoryCache(),
  });
};

export default apolloClient;
