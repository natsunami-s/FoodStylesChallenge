import { Keyboard } from 'react-native';
import { withFormik } from 'formik';
import React from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';

import { FormProps, FormValues, TSignUpContainer } from './types';
import { signUpSchema } from 'utils/validations';
import SignUpScreen from './signUp';
import { SIGN_UP_WITH_EMAIL } from 'graphql/mutations/signUpWithEmail';
import { setUserData } from 'redux/reducers/user/reducer';

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

  const dispatch = useDispatch();

  const onSignUpPress = async () => {
    Keyboard.dismiss();
    try {
      const res = await signUpWithEmail();
      // console.warn(res);
      dispatch(
        setUserData({
          user: res.data.signUpWithEmail.user,
          accessToken: res.data.signUpWithEmail.accessToken,
          refreshToken: res.data.signUpWithEmail.refreshToken,
        }),
      );
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
