import { SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SignInOptionsScreen, SignInScreen, SignUpScreen } from 'features/auth';
import ProfileScreen from 'features/profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAccessToken } from 'redux/ducks/user/selectors';

const Root: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const token = useSelector(getAccessToken);

  return (
    <SafeAreaView style={[styles.container]}>
      <NavigationContainer>
        {token === null ? (
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
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Root;