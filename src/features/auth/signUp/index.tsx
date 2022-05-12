import { Keyboard } from 'react-native';
import { withFormik } from 'formik';
import React from 'react';
import { useMutation } from '@apollo/client';

import { FormProps, FormValues, TSignUpContainer } from './types';
import { signUpSchema } from 'utils/validations';
import SignUpScreen from './signUp';
import { SIGN_UP_WITH_EMAIL } from 'graphql/mutations/signUpWithEmail';

const SignUpContainer: React.FC<TSignUpContainer> = ({
  navigation,
  handleChange,
  handleBlur,
  values,
  errors,
  isValid,
  dirty,
}) => {
  const [signUpWithEmail, { loading }] = useMutation(SIGN_UP_WITH_EMAIL, {
    variables: {
      name: values.name,
      email: values.email?.trim(),
      password: values.password,
    },
  });

  const onSignUpPress = async () => {
    Keyboard.dismiss();
    try {
      await signUpWithEmail();
      navigation.navigate('SignIn');
    } catch (e) {
      console.warn('e', e.networkError.result.errors);
    }
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <SignUpScreen
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleBlur={handleBlur}
      isButtonDisabled={!isValid || !dirty}
      isLoading={loading}
      onSignUpPress={onSignUpPress}
      onBackPress={onBackPress}
    />
  );
};

export default withFormik<TSignUpContainer & FormProps, FormValues>({
  mapPropsToValues: ({ name, email, password }) => ({
    name,
    email,
    password,
  }),
  validationSchema: signUpSchema,
  handleSubmit: () => {},
  displayName: 'signIn',
  validateOnMount: false,
})(SignUpContainer);
