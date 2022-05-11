import { ScrollView, Text, TextInput, View } from 'react-native';
import React from 'react';

import {
  ButtonWithText,
  ErrorMessage,
  GradientBackground,
  Header,
  InputWithLabel,
  Spacer,
} from 'components';
import { SharedStyles, Strings } from 'constants';
import { TSignUpScreen } from './types';
import { scale } from 'utils/responsiveDimensions';
import styles from './signUp.styles';

const SignUpScreen: React.FC<TSignUpScreen> = ({
  values,
  errors,
  handleChange,
  handleBlur,
  isLoading,
  isButtonDisabled,
  onSignUpPress,
}) => (
  <ScrollView
    style={styles.container}
    contentContainerStyle={styles.contentContainer}
    keyboardShouldPersistTaps="handled"
    alwaysBounceVertical={false}
    bounces={false}
    showsVerticalScrollIndicator={false}>
    <GradientBackground>
      <Header title={Strings.signUp.title} />
      <View style={styles.content}>
        <InputWithLabel
          value={values.name}
          label={Strings.fieldLabels.name}
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
        />
        <InputWithLabel
          value={values.email}
          label={Strings.fieldLabels.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
        />
        <View>
          <Text style={SharedStyles.label}>
            {Strings.fieldLabels.password}{' '}
            <Text style={SharedStyles.subLabel}>
              {Strings.fieldLabels.passwordRequirement}
            </Text>
          </Text>
          <TextInput
            value={values.password}
            secureTextEntry={true}
            style={[SharedStyles.input]}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
          />
        </View>
        {(!!errors.email || !!errors.password) && (
          <ErrorMessage errorMsg={errors.email || errors.password} />
        )}
        <Spacer height={scale(26)} />
        <ButtonWithText
          text={Strings.buttons.signUp}
          textStyle={styles.buttonText}
          disabled={isButtonDisabled}
          isLoading={isLoading}
          onPress={onSignUpPress}
        />
      </View>
    </GradientBackground>
  </ScrollView>
);

export default SignUpScreen;
