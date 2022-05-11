import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import configureStore from 'redux/config/createStore';
import apolloClient from 'graphql/apolloClient';
import Root from 'Root';

export const { store, persistor } = configureStore();

const App = () => {
  return (
    <ApolloProvider client={apolloClient()}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Root />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
