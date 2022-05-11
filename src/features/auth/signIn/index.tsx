import { Keyboard } from 'react-native';
import { withFormik } from 'formik';
import React from 'react';

import { FormProps, FormValues, TSignInContainer } from './types';
import { signInSchema } from 'utils/validations';
import SignInScreen from './signIn';

const SignInContainer: React.FC<TSignInContainer> = ({
  navigation,
  handleChange,
  handleBlur,
  values,
  errors,
  isValid,
}) => {
  const onSignInPress = () => {
    Keyboard.dismiss();
    // mutate();
  };

  return (
    <SignInScreen
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleBlur={handleBlur}
      isButtonDisabled={!isValid}
      // isLoading={isLoading}
      onSignInPress={onSignInPress}
    />
  );
};

export default withFormik<TSignInContainer & FormProps, FormValues>({
  mapPropsToValues: ({ email, password }) => ({
    email,
    password,
  }),
  validationSchema: signInSchema,
  handleSubmit: () => {},
  displayName: 'signIn',
  validateOnMount: true,
})(SignInContainer);
