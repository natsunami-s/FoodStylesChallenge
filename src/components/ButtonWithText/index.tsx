import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';

import { Colors } from 'constants';

import LoadingWrapper from '../LoadingWrapper';
import styles from './styles';

interface Props {
  text: string,
  loaderColor?: string,
  disabled?: boolean,
  isLoading?: boolean,
  numberOfLines?: number,
  containerStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  onPress?: () => void,
}

const ButtonWithText: React.FC<Props> = ({
  text,
  loaderColor = Colors.white,
  disabled,
  numberOfLines = 1,
  containerStyle,
  textStyle,
  isLoading,
  onPress,
}) => (
  <TouchableOpacity
    style={[
      styles.container,
      containerStyle,
      disabled && styles.disabled,
    ]}
    disabled={disabled || isLoading}
    onPress={onPress}
  >
    <LoadingWrapper size="small" isLoading={isLoading} color={loaderColor}>
      <Text
        style={[styles.text, textStyle]}
        numberOfLines={numberOfLines}
        ellipsizeMode="tail"
      >
        {text}
      </Text>
    </LoadingWrapper>
  </TouchableOpacity>
);

export default ButtonWithText;
