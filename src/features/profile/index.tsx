import { Keyboard } from 'react-native';
import { withFormik } from 'formik';
import React from 'react';
import { useMutation } from '@apollo/client';

import { FormProps, FormValues, TProfileContainer } from './types';
import { editProfileSchema } from 'utils/validations';
import ProfileScreen from './profile';
import { UPDATE_USER } from 'graphql/mutations/updateUser';

const ProfileContainer: React.FC<TProfileContainer> = ({
  navigation,
  handleChange,
  handleBlur,
  values,
  errors,
  isValid,
  dirty,
}) => {
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
    } catch (e) {
      console.warn('e', e.networkError.result.errors);
    }
  };

  const onLogOutPress = () => {};

  return (
    <ProfileScreen
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleBlur={handleBlur}
      isButtonDisabled={!isValid || !dirty}
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
