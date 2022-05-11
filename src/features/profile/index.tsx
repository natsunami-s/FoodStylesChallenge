import { Keyboard } from 'react-native';
import { withFormik } from 'formik';
import React from 'react';

import { FormProps, FormValues, TProfileContainer } from './types';
import { editProfileSchema } from 'utils/validations';
import ProfileScreen from './profile';

const ProfileContainer: React.FC<TProfileContainer> = ({
  navigation,
  handleChange,
  handleBlur,
  values,
  errors,
  isValid,
  dirty,
}) => {
  const onDonePress = () => {
    Keyboard.dismiss();
    // mutate();
  };

  const onLogOutPress = () => {};

  return (
    <ProfileScreen
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleBlur={handleBlur}
      isButtonDisabled={!isValid || !dirty}
      // isLoading={isLoading}
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
