import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';

const GRAPHQL_ENDPOINT = 'https://api-dev.foodstyles.com/graphql';

const apolloClient = () => {
  const link = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    // headers: {
    //   access_token: 'Bearer <TOKEN>',
    // },
  });

  return new ApolloClient({
    link: from([link]),
    cache: new InMemoryCache(),
  });
};

export default apolloClient;
