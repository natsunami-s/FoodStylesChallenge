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
import { TSignInScreen } from './types';
import { scale } from 'utils/responsiveDimensions';
import styles from './signIn.styles';

const SignInScreen: React.FC<TSignInScreen> = ({
  values,
  errors,
  handleChange,
  handleBlur,
  isLoading,
  isButtonDisabled,
  onSignInPress,
  onBackPress,
}) => (
  <ScrollView
    style={styles.container}
    contentContainerStyle={styles.contentContainer}
    keyboardShouldPersistTaps="handled"
    alwaysBounceVertical={false}
    bounces={false}
    showsVerticalScrollIndicator={false}>
    <GradientBackground>
      <Header title={Strings.logIn.title} onBackPress={onBackPress} />
      <View style={styles.content}>
        <InputWithLabel
          value={values.email}
          label={Strings.fieldLabels.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
        />

        <View>
          <Text style={SharedStyles.label}>{Strings.fieldLabels.password}</Text>
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
          text={Strings.buttons.logIn}
          textStyle={styles.buttonText}
          disabled={isButtonDisabled}
          isLoading={isLoading}
          onPress={onSignInPress}
        />
      </View>
    </GradientBackground>
  </ScrollView>
);

export default SignInScreen;
