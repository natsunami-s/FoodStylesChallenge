import { Keyboard } from 'react-native';
import { withFormik } from 'formik';
import React from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';

import { FormProps, FormValues, TSignInContainer } from './types';
import { signInSchema } from 'utils/validations';
import SignInScreen from './signIn';
import { LOG_IN_WITH_EMAIL } from 'graphql/mutations/logInWithEmail';
import { setUserData } from 'redux/reducers/user/reducer';

const SignInContainer: React.FC<TSignInContainer> = ({
  navigation,
  handleChange,
  handleBlur,
  values,
  errors,
  isValid,
}) => {
  const [logInWithEmail, { loading }] = useMutation(LOG_IN_WITH_EMAIL, {
    variables: {
      email: values.email?.trim(),
      password: values.password,
    },
  });

  const dispatch = useDispatch();

  const onSignInPress = async () => {
    Keyboard.dismiss();
    try {
      const res = await logInWithEmail();
      // console.warn(res);
      dispatch(
        setUserData({
          user: res.data.loginWithEmail.user,
          accessToken: res.data.loginWithEmail.accessToken,
          refreshToken: res.data.loginWithEmail.refreshToken,
        }),
      );
    } catch (e) {
      console.warn('e', e.networkError.result.errors);
    }
  };

  return (
    <SignInScreen
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleBlur={handleBlur}
      isButtonDisabled={!isValid}
      isLoading={loading}
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
