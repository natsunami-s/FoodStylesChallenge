import { Keyboard } from 'react-native';
import { withFormik } from 'formik';
import React from 'react';

import { FormProps, FormValues, TSignUpContainer } from './types';
import { signUpSchema } from 'utils/validations';
import SignUpScreen from './signUp';

const SignUpContainer: React.FC<TSignUpContainer> = ({
  navigation,
  handleChange,
  handleBlur,
  values,
  errors,
  isValid,
  dirty,
  validateOnBlur,
}) => {
  const onSignUpPress = () => {
    vali
    Keyboard.dismiss();
    // mutate();
  };

  return (
    <SignUpScreen
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleBlur={handleBlur}
      isButtonDisabled={!isValid || !dirty}
      // isLoading={isLoading}
      onSignUpPress={onSignUpPress}
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

// export default SignUpContainer;
