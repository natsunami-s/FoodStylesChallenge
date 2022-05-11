import { Text, View } from 'react-native';
import React from 'react';

import {
  ButtonWithText,
  ErrorMessage,
  Header,
  InputWithLabel,
  Spacer,
} from 'components';
import { SharedStyles, Strings } from 'constants';
import { TProfileScreen } from './types';
import { scale } from 'utils/responsiveDimensions';
import styles from './profile.styles';

const ProfileScreen: React.FC<TProfileScreen> = ({
  values,
  errors,
  handleChange,
  handleBlur,
  isLoading,
  isButtonDisabled,
  onDonePress,
  onLogOutPress,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{Strings.profile.title}</Text>
    <View style={styles.content}>
      <InputWithLabel
        value={values.name}
        label={Strings.fieldLabels.nameOnSharedCards}
        inputStyle={styles.input}
        labelStyle={styles.label}
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
      />
      <InputWithLabel
        value={values.email}
        label={Strings.fieldLabels.email}
        inputStyle={styles.input}
        labelStyle={styles.label}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
      />
      {/* {(!!errors.email || !!errors.password) && (
          <ErrorMessage errorMsg={errors.email || errors.password} />
        )} */}
      <Spacer height={scale(330)} />
      <ButtonWithText
        text={Strings.buttons.logOut}
        containerStyle={styles.logOutButton}
        textStyle={styles.logOutButtonText}
        disabled={isButtonDisabled}
        isLoading={isLoading}
        onPress={onLogOutPress}
      />
      <Spacer height={scale(41.4)} />
      <ButtonWithText
        text={Strings.buttons.done}
        containerStyle={styles.doneButton}
        // textStyle={styles.logOutButtonText}
        disabled={isButtonDisabled}
        isLoading={isLoading}
        onPress={onDonePress}
      />
    </View>
  </View>
);

export default ProfileScreen;
