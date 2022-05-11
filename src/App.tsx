import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { SignInOptionsScreen, SignInScreen, SignUpScreen } from 'features/auth';
import ProfileScreen from 'features/profile';
import apolloClient from 'graphql/apolloClient';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={apolloClient()}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="SignIn">
          <Stack.Screen name="SignInOptions" component={SignInOptionsScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
        {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
