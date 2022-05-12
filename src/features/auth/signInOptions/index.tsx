import React, { useState } from 'react';

import { TSignInOptionsContainer } from './types';

import SignInOptionsScreen from './signInOptions';

const SignInOptionsContainer: React.FC<TSignInOptionsContainer> = ({
  navigation,
}) => {
  const onLogInPress = () => {
    navigation.navigate('SignIn');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SignInOptionsScreen
      onLogInPress={onLogInPress}
      onSignUpPress={onSignUpPress}
    />
  );
};

export default SignInOptionsContainer;
