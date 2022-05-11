import { Image, ScrollView, Text, View } from 'react-native';
import React from 'react';

import styles from './signInOptions.styles';
import { TSignInOptionsScreen } from './types';
import {
  ButtonWithImage,
  ButtonWithText,
  GradientBackground,
  Spacer,
  TextButton,
} from 'components';
import { Images, Strings } from 'constants';
import { scale } from 'utils/responsiveDimensions';

const SignInOptionsScreen: React.FC<TSignInOptionsScreen> = ({
  onLogInPress,
  onSignUpPress,
}) => (
  <ScrollView
    style={styles.container}
    contentContainerStyle={styles.contentContainer}
    showsVerticalScrollIndicator={false}
    alwaysBounceVertical={false}
    bounces={false}
    keyboardShouldPersistTaps="handled">
    <GradientBackground>
      <View style={styles.content}>
        <Image
          source={Images.logo}
          resizeMode="contain"
          style={{ marginTop: 30, height: scale(121) }}
        />
        <Spacer height={scale(25)} />
        <Text style={styles.subtitle}>{Strings.signInOptions.subtitle}</Text>
        <Spacer height={scale(30)} />
        <ButtonWithImage
          imageSource={Images.appleLogo}
          text={Strings.buttons.appleSignIn}
          containerStyle={styles.button}
          textStyle={styles.buttonText}
          imageStyle={styles.appleLogo}
        />
        <Spacer height={scale(15)} />
        <ButtonWithImage
          imageSource={Images.facebookLogo}
          text={Strings.buttons.facebookSignIn}
          containerStyle={styles.button}
          textStyle={styles.buttonText}
          imageStyle={styles.fbLogo}
        />
        <Spacer height={scale(15)} />
        <ButtonWithImage
          imageSource={Images.googleLogo}
          text={Strings.buttons.googleSignIn}
          containerStyle={styles.button}
          textStyle={styles.buttonText}
          imageStyle={styles.googleLogo}
        />
        <Spacer height={scale(15)} />
        <ButtonWithText
          text={Strings.buttons.emailSignUp}
          containerStyle={styles.button}
          textStyle={styles.buttonText}
          onPress={onSignUpPress}
        />
        <Spacer height={scale(20)} />
        <TextButton
          textStyle={styles.secondaryButtonText}
          text={Strings.buttons.logInWithEmail}
          onPress={onLogInPress}
        />
        <Spacer height={scale(38)} />
        <Text style={styles.acceptTerms}>
          {Strings.signInOptions.termsPart1}
          <Text style={[styles.acceptTerms, styles.link]}>
            {Strings.signInOptions.terms}
          </Text>
          {Strings.signInOptions.termsPart2}
          <Text style={[styles.acceptTerms, styles.link]}>
            {Strings.signInOptions.privacyPolicy}
          </Text>
        </Text>
      </View>
    </GradientBackground>
  </ScrollView>
);

export default SignInOptionsScreen;
