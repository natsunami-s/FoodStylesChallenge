import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import configureStore from 'redux/config/createStore';
import { SignInOptionsScreen, SignInScreen, SignUpScreen } from 'features/auth';
import ProfileScreen from 'features/profile';
import apolloClient from 'graphql/apolloClient';

export const { store, persistor } = configureStore();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={apolloClient()}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="SignIn">
              <Stack.Screen
                name="SignInOptions"
                component={SignInOptionsScreen}
              />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </Stack.Navigator>
            {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator> */}
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
