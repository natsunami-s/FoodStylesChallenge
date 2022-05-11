import { Keyboard } from 'react-native';
import { withFormik } from 'formik';
import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import { FormProps, FormValues, TProfileContainer } from './types';
import { editProfileSchema } from 'utils/validations';
import ProfileScreen from './profile';
import { UPDATE_USER } from 'graphql/mutations/updateUser';
import { resetAppState, setUser } from 'redux/reducers/user/reducer';
import {
  getAccessToken,
  getUserEmail,
  getUserName,
} from 'redux/reducers/user/selectors';

const ProfileContainer: React.FC<TProfileContainer> = ({
  navigation,
  handleChange,
  handleBlur,
  values,
  errors,
  isValid,
  dirty,
  setFieldValue,
}) => {
  const name = useSelector(getUserName);
  const email = useSelector(getUserEmail);

  useEffect(() => {
    setFieldValue('name', name);
    setFieldValue('email', email);
  }, [name]);
  const [updateUser, { loading }] = useMutation(UPDATE_USER, {
    variables: {
      name: values.name,
      email: values.email?.trim(),
    },
  });

  const onDonePress = async () => {
    Keyboard.dismiss();
    try {
      const res = await updateUser();
      console.warn(res);
      dispatch(setUser(res.data.updateUser));
    } catch (e) {
      console.warn('e', e.networkError.result.errors);
    }
  };

  const dispatch = useDispatch();

  const onLogOutPress = () => {
    dispatch(resetAppState());
  };

  return (
    <ProfileScreen
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleBlur={handleBlur}
      // isButtonDisabled={!isValid}
      isLoading={loading}
      onDonePress={onDonePress}
      onLogOutPress={onLogOutPress}
    />
  );
};

export default withFormik<TProfileContainer & FormProps, FormValues>({
  mapPropsToValues: ({ name, email }) => ({
    name,
    email,
  }),
  validationSchema: editProfileSchema,
  handleSubmit: () => {},
  displayName: 'profile',
  validateOnMount: false,
})(ProfileContainer);

// export default ProfileContainer;
